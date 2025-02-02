import {Component, Input} from "@angular/core";
import {NgClass, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
    selector: "app-card-content",
    imports: [
        NgIf,
        NgOptimizedImage,
        NgClass
    ],
    templateUrl: "./card-content.component.html",
    styleUrl: "./card-content.component.css"
})
export class CardContentComponent {
    @Input({required: true})
    public title = "";

    @Input()
    public description: string | null = null;

    @Input()
    public imageSrc: string | null = null;

    @Input()
    public alt: string | null = null;
}
