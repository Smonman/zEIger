import {Component, EventEmitter, Input, Output} from "@angular/core";
import {CardTypeEnum} from "../../../../enums/card-type.enum";
import {NgIf} from "@angular/common";
import {CardContentComponent} from "./card-content/card-content.component";
import {Params, RouterLink, UrlTree} from "@angular/router";

@Component({
    selector: "app-card",
    imports: [
        NgIf,
        CardContentComponent,
        RouterLink
    ],
    templateUrl: "./card.component.html",
    styleUrl: "./card.component.css"
})
export class CardComponent {

    @Input()
    public type: CardTypeEnum = CardTypeEnum.STATIC;
    @Input({required: true})
    public title: string = "";
    @Input()
    public description: string | null = null;
    @Input()
    public imageSrc: string | null = null;
    @Input()
    public alt: string | null = null;
    @Input()
    public routerLink: any[] | string | UrlTree | null = null;
    @Input()
    public queryParams: Params | null = null;
    @Output()
    public click: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
    protected readonly CardTypeEnum = CardTypeEnum;

    protected onClick(mouseEvent: MouseEvent): void {
        this.click.emit(mouseEvent);
    }
}
