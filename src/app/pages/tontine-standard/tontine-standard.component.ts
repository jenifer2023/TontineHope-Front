import { Component } from '@angular/core';
import { TClassiqueComponent } from '../../components/classique/tclassique.component';
import { TstandardComponent } from '../../components/tstandard.component';
@Component({
  selector: 'app-tontine-standard',
  standalone: true,
  imports: [TClassiqueComponent, TstandardComponent,],
  templateUrl: './tontine-standard.component.html',
  styleUrl: './tontine-standard.component.css'
})
export class TontineStandardComponent {
  title1 = "Tontine Standard"

}
