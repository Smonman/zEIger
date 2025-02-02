import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";
import {CardComponent} from "../../shared/card/card.component";
import {CardTypeEnum} from "../../../../enums/card-type.enum";

@Component({
    selector: "app-dashboard",
    imports: [
        RouterLink,
        CardComponent
    ],
    templateUrl: "./dashboard.component.html",
    styleUrl: "./dashboard.component.css"
})
export class DashboardComponent {

    protected readonly CardTypeEnum = CardTypeEnum;
}
