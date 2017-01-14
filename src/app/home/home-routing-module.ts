import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";

import { WelcomeComponent } from "./welcome/welcome-component";

const routes: Routes = [
    {
        path: "home",
        children: [
            {
                path: "welcome",
                component: WelcomeComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: []
})
export class HomeRoutingModule { }
