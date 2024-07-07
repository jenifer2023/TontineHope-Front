import { Component } from '@angular/core';
import { TClassiqueComponent } from '../../components/classique/tclassique.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-tontine-classique',
  standalone: true,
  imports: [TClassiqueComponent, TranslateModule],
  templateUrl: './tontine-classique.component.html',
  styleUrl: './tontine-classique.component.css'
})
export class TontineClassiqueComponent {

  title1="Tontine Classique";
  title2="Tontine Classique"

}
