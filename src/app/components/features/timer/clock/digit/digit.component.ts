import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild} from "@angular/core";
import {NgClass} from "@angular/common";

@Component({
    selector: "app-digit",
    imports: [
        NgClass
    ],
    templateUrl: "./digit.component.html",
    styleUrl: "./digit.component.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DigitComponent implements AfterViewInit {
    @Input({required: true})
    public digit = 0;

    @Input({required: true})
    public rotation = 0;

    @Input({required: true})
    public offset = 0;

    @ViewChild("digitSpan", {read: ElementRef})
    protected digitSpan: ElementRef<HTMLSpanElement> | null = null;

    ngAfterViewInit(): void {
        if (this.digitSpan !== null) {
            this.digitSpan.nativeElement.style.transform = `rotateZ(${this.rotation}deg) translateY(${this.offset}px)`;
        }
    }
}
