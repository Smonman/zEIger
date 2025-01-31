import {Routes} from "@angular/router";

export const routes: Routes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
    },
    {
        path: "dashboard",
        loadComponent: () => import("./components/features/dashboard/dashboard.component").then(m => m.DashboardComponent),
    },
    {
        path: "timer",
        loadComponent: () => import("./components/features/timer/timer.component").then((m) => m.TimerComponent)
    },
    {path: "**", redirectTo: "dashboard"},
];
