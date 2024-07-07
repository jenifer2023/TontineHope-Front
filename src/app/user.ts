import { EmailValidator } from "@angular/forms";

export class User {
    nom: string;
    prenom : String;
    speudo : String;
    email : EmailValidator;
    password: { 
        pwd: string;
        confirmPwd: string;
      };
    constructor() {
      this.nom = '';
      this.prenom = '';
      this.speudo = '';
      this.password = {pwd: '', confirmPwd: ''};
      this.email = new EmailValidator
      
    }

}
