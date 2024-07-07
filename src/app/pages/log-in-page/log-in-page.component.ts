
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CostumValidatorService } from '../../services/validators/costum-validator.service';
import { FormsModule, ReactiveFormsModule,Validators,FormGroup, FormBuilder, } from '@angular/forms';


@Component({
  selector: 'app-log-in-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink,
   RouterLinkActive, ReactiveFormsModule, ],
  templateUrl: './log-in-page.component.html',
  styleUrl: './log-in-page.component.css'
})
export class LogInPageComponent implements OnInit {

  public UserForm : FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private customValidator: CostumValidatorService
  ) { }

  ngOnInit(): void {
    this.UserForm = this.fb.group({
      // nom: ['', Validators.required],
      // prenom: ['', Validators.required],
      // username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      // confirmPassword: ['', [Validators.required]],
    },
      {
        validator: this.customValidator.MatchPassword('password', 'email'),
      }
    );
  }

  get registerFormControl() {
    return this.UserForm.controls;
  }


  onSubmit() {
    this.submitted = true;
    if (this.UserForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.UserForm.value);
    }
    throw new Error('Method not implemented.');
 }
}
