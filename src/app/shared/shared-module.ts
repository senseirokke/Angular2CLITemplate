import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Http } from "@angular/http";
import { HttpModule } from "@angular/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgModule } from "@angular/core";

import { RoutingModule } from "../routing/routing-module";
import { TranslateLoader } from "ng2-translate";
import { TranslateModule } from "ng2-translate";
import { TranslateStaticLoader } from "ng2-translate";

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, "/assets/translations", "/translations.json");
}

@NgModule({
    imports: [
        NgbModule.forRoot(),
        HttpModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [Http]
        })
    ],
    declarations: [],
    exports: [
        CommonModule,
        FormsModule,
        HttpModule,
        NgbModule,
        RoutingModule,
        TranslateModule
    ]
})
export class SharedModule { }
