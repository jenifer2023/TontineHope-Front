import { Component } from '@angular/core';
import { TClassiqueComponent } from '../../components/classique/tclassique.component';
import { TstandardComponent } from '../../components/standard/tstandard.component';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-tontine-standard',
  standalone: true,
  imports: [
   TClassiqueComponent,
   TstandardComponent,
   TranslateModule
],
  templateUrl: './tontine-standard.component.html',
  styleUrl: './tontine-standard.component.css'
})
export class TontineStandardComponent {
  title1 = "Tontine Standard"

}
