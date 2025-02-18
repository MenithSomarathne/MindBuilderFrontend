import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
  standalone: true
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToLogin() {
    // Optionally add animation or effects here before navigation
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 500); // Delay navigation for smooth effect
  }
}
