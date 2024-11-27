import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component'; // Import NavbarComponent
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [NavbarComponent, RouterOutlet], // Add RouterOutlet here
})
export class AppComponent {
  title = 'website';
}
