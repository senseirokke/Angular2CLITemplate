import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";

const appRoutes: Routes = [
    { path: "", redirectTo: "home/welcome", pathMatch: "full" }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})
export class RoutingModule { }
