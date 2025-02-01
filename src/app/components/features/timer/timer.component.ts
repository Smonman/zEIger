import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Temporal} from "@js-temporal/polyfill";
import {NgIf} from "@angular/common";
import Duration = Temporal.Duration;

@Component({
    selector: "app-timer",
    imports: [
        NgIf
    ],
    templateUrl: "./timer.component.html",
    styleUrl: "./timer.component.scss"
})
export class TimerComponent implements OnInit, OnDestroy {

    protected time: number | null = null;
    protected currentDuration: Temporal.Duration | null = null;
    protected readonly Temporal = Temporal;
    protected readonly Duration = Duration;
    private intervalId: number | null = null;
    private currentTime: number = 0;

    public constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        this.time = Number(this.activatedRoute.snapshot.queryParamMap.get("time"));
        if (this.time === null || Number.isNaN(this.time)) {
            this.router.navigate(["/dashboard"]).then();
        }
        this.currentTime = this.time;
        this.startTimer();
    }

    ngOnDestroy(): void {
        if (this.intervalId !== null) {
            window.clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    protected startTimer(): void {
        this.intervalId = window.setInterval(() => {
            this.currentTime = this.currentTime - 1;
            this.currentDuration = Duration.from({seconds: this.currentTime}).round({largestUnit: "minute"});
            if (this.currentTime <= 0 && this.intervalId !== null) {
                window.clearInterval(this.intervalId);
                this.intervalId = null;
            }
        }, 1000);
    }
}
