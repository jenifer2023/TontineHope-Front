import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TontineClassiqueComponent } from '../tontine-classique/tontine-classique.component';

@Component({
   selector: 'app-page-not-found',
   standalone: true,
   imports: [
      TranslateModule,
   ],
   templateUrl: './page-not-found.component.html',
   styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

}
