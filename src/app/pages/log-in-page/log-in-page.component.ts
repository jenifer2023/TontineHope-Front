import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-log-in-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink,
   RouterLinkActive],
  templateUrl: './log-in-page.component.html',
  styleUrl: './log-in-page.component.css'
})
export class LogInPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit() {
    throw new Error('Method not implemented.');
 }
}
