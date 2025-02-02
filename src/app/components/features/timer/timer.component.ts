import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
    selector: "app-timer",
    imports: [
        DatePipe
    ],
    templateUrl: "./timer.component.html",
    styleUrl: "./timer.component.css"
})
export class TimerComponent implements OnInit, OnDestroy {

    private startTime: number | null = null;
    private intervalId: number | null = null;
    private currentTime = 0;

    public constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        const queryParam: string | null = this.activatedRoute.snapshot.queryParamMap.get("time");
        this.startTime = Number(queryParam);
        if (queryParam === null || Number.isNaN(this.startTime)) {
            void this.router.navigate(["/dashboard"]);
        }
        this.currentTime = this.startTime;
        this.startTimer();
    }

    ngOnDestroy(): void {
        if (this.intervalId !== null) {
            window.clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    protected getCurrentTimeAsDate(): Date {
        const date = new Date(0, 0, 0, 0, 0, 0, 0);
        date.setSeconds(this.currentTime);
        return date;
    }

    protected startTimer(): void {
        this.intervalId = window.setInterval(() => {
            this.currentTime = this.currentTime - 1;
            if (this.currentTime <= 0 && this.intervalId !== null) {
                window.clearInterval(this.intervalId);
                this.intervalId = null;
            }
        }, 1000);
    }
}
