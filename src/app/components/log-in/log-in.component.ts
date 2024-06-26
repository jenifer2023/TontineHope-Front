import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit() {
    throw new Error('Method not implemented.');
 }
}
