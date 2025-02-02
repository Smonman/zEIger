import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";

@Component({
    selector: "app-header",
    imports: [
        RouterLink
    ],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.css"
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class HeaderComponent {
}
