import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { CoreModule } from "./core/core-module";
import { RootComponent } from "./app.component";
import { RoutingModule } from "./routing/routing-module";
import { SharedModule } from "./shared/shared-module";

@NgModule({
    declarations: [
        RootComponent
    ],
    imports: [
        CoreModule,
        BrowserModule,
        SharedModule,
        RoutingModule
    ],
    bootstrap: [RootComponent]
})
export class AppModule { }
