import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";
import {DigitComponent} from "./digit/digit.component";
import {NgForOf, NgIf} from "@angular/common";

@Component({
    selector: "app-clock",
    imports: [
        DigitComponent,
        NgForOf,
        NgIf
    ],
    templateUrl: "./clock.component.html",
    styleUrl: "./clock.component.css"
})
export class ClockComponent implements OnInit, AfterViewInit {

    @Input({required: true})
    public maxSeconds = 0;

    @ViewChild("clock", {read: ElementRef})
    public clock: ElementRef<HTMLDivElement> | null = null;

    protected size = 0;
    protected digitCount = 0;
    protected isReady = false;

    ngOnInit() {
        this.digitCount = Math.ceil(this.maxSeconds / 10);
    }

    ngAfterViewInit(): void {
        if (this.clock !== null) {
            this.size = this.clock.nativeElement.clientWidth;
            this.isReady = true;
        }
    }

    protected getOffset(): number {
        return (this.size / 2.0) - 16;
    }

    protected getRotation(i: number): number {
        return (360 / (this.digitCount + 1)) * i;
    }

    protected getDigits(): number[] {
        let digits: number[] = [];
        for (let i = 0; i <= this.digitCount; i++) {
            digits.push(this.getDigit(i));
        }
        return digits;
    }

    private getDigit(i: number): number {
        return i;
    }
}
