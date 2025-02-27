import {Component, signal} from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule],
  animations: [
    trigger('pageTransition', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms 100ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  goToSignUp() {
    this.router.navigate(['/signup']); // Navigate to the sign-up page
  }
  constructor(private router: Router) {}

  onSubmit() {
    console.log('Username:', this.username);

    switch (this.username.toLowerCase()) {
      case 'admin':
        this.router.navigate(['/admin-dashboard']);
        break;
      case 'student':
        this.router.navigate(['/student-dashboard']);
        break;
      case 'teacher':
        this.router.navigate(['/teacher-dashboard']);
        break;
      case 'parent':
        this.router.navigate(['/parent-dashboard']);
        break;
      default:
        alert('Invalid credentials or role');
        break;
    }
  }
}
