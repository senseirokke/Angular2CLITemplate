import { Injectable } from "@angular/core";
import { TranslateService } from "ng2-translate";

@Injectable()
export class TranslationService {
    public static readonly LANGUAGE_ENGLISH: string = "en";
    public static readonly LANGUAGE_DANISH: string = "da";

    constructor(private _translate: TranslateService) {
        _translate.setDefaultLang(TranslationService.LANGUAGE_ENGLISH);
        this._translate.use(TranslationService.LANGUAGE_DANISH);
    }

    public getCurrentLanguage(): string {
        return this._translate.currentLang;
    }
}

