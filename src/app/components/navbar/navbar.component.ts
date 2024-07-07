import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from "@ngx-translate/core";


@Component({
   selector: 'app-navbar',
   standalone: true,
   imports: [
      CommonModule,
      RouterLink,
      RouterLinkActive,
      TranslateModule,
   ],
   templateUrl: './navbar.component.html',
   styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

   languages: string[] = ["en", "fr"];
   selectedLang: string = null;

   constructor(private _translateService: TranslateService) { };

   ngOnInit(): void {
      const defaultLanguage = window.localStorage.getItem('language') || 'fr';
      this._translateService.setDefaultLang(defaultLanguage);
      this._translateService.use(defaultLanguage);
   }

   // Method to change language in the localStorage
   changeLanguage(event: Event) {
      const lang = event.target["value"];
      this._translateService.use(lang);
      window.localStorage.setItem('language', lang);
   }
}
