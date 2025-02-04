import {AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";
import {DigitComponent} from "./digit/digit.component";
import {NgForOf} from "@angular/common";

@Component({
    selector: "app-clock",
    imports: [
        DigitComponent,
        NgForOf
    ],
    templateUrl: "./clock.component.html",
    styleUrl: "./clock.component.css"
})
export class ClockComponent implements OnInit, AfterViewInit, AfterViewChecked {
    @Input({alias: "size"})
    public sizeHint = -1;

    @Input({required: true})
    public maxSeconds = 0;

    @ViewChild("clock", {read: ElementRef})
    public clock: ElementRef<HTMLDivElement> | null = null;

    protected size = 0;

    protected digitCount = 0;

    ngOnInit() {
        this.digitCount = Math.ceil(this.maxSeconds / 10);
    }

    ngAfterViewInit(): void {
        if (this.clock !== null) {
            if (this.sizeHint >= 0) {
                this.clock.nativeElement.style.width = `${this.sizeHint}px`;
                this.clock.nativeElement.style.height = `${this.sizeHint}px`;
            } else {
                this.clock.nativeElement.style.width = "100%";
                this.clock.nativeElement.style.height = "100%";
            }
        }
    }

    ngAfterViewChecked(): void {
        if (this.clock !== null) {
            this.size = this.clock.nativeElement.clientWidth;
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
