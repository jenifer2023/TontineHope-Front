import { tick } from "@angular/core/testing"
import { Title } from "@angular/platform-browser"
import { Timestamp } from "rxjs"

export class Tontine {
    title1: string
    title2: string
    nom: string
    montant: number
    heure:Date
    dateDeb:Date
    frequence:string

   constructor() {
     this.title1 = "";
     this.title2 = "";
     this.nom = "";
     this.montant = 0;
     this.heure = new Date();
     this.dateDeb = new Date();
     this.frequence = ""
   }
}

