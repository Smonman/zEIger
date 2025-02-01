import {Component, OnInit} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./components/shared/header/header.component";
import {registerLocaleData} from "@angular/common";
import * as deAt from "@angular/common/locales/de-AT"

@Component({
    selector: "app-root",
    imports: [RouterOutlet, HeaderComponent],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss"
})
export class AppComponent implements OnInit {
    title = "zEIger";

    ngOnInit(): void {
        registerLocaleData(deAt.default);
    }
}
