import { NgModule } from "@angular/core";

import { HomeModule } from "../home/home-module";
import { TranslationService } from "./translations/translations-service";

@NgModule({
    imports: [
        HomeModule
    ],
    providers: [
        TranslationService
        ],
    declarations: []
})
export class CoreModule {
}
