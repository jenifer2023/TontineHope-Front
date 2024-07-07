import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { TontineClassiqueComponent } from '../tontine-classique/tontine-classique.component';
import { TontineStandardComponent } from '../tontine-standard/tontine-standard.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
   NavbarComponent,
   TranslateModule,
   TontineClassiqueComponent,
   TontineStandardComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
