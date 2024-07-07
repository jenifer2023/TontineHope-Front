import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-tclassique',
  standalone: true,
  imports: [ TranslateModule],
  templateUrl: './tclassique.component.html',
  styleUrl: './tclassique.component.css'
})
export class TClassiqueComponent {

@Input({ required: true }) title1: string = '';
// @Input({ required: true }) title2: string = '';

  frequences = [
    "Chaque jour",
    "Chaque semaine",
    "En alternance d'une semaine",
    "Après chaque deux semaine",
    "Chaque mois",
  ];

}
