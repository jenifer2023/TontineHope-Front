import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TontineClassiqueComponent } from './pages/tontine-classique/tontine-classique.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FormsModule, LogInPageComponent,NavbarComponent, TontineClassiqueComponent 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TontineHope';
}
