import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink,
   RouterLinkActive],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css'
})
export class SignUpPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }

}
