import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: "app-timer",
    imports: [],
    templateUrl: "./timer.component.html",
    styleUrl: "./timer.component.scss"
})
export class TimerComponent implements OnInit {

    protected time: number | null = null;

    public constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        this.time = Number(this.activatedRoute.snapshot.queryParamMap.get("time"));
        if (this.time === null || Number.isNaN(this.time)) {
            this.router.navigate(["/dashboard"]).then();
        }
    }
}
