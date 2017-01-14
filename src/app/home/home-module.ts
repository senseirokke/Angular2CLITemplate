import { NgModule } from "@angular/core";

import { HomeRoutingModule } from "./home-routing-module";
import { SharedModule } from "../shared/shared-module";
import { WelcomeComponent } from "./welcome/welcome-component";

@NgModule({
    imports: [
        SharedModule,
        HomeRoutingModule
    ],
    declarations: [
        WelcomeComponent
    ]
})
export class HomeModule { }
