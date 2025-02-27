import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'] // corrected styleUrl to styleUrls
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  onSignUp(form: NgForm) {
    if (form.invalid) {
      return; // Exit if the form is invalid
    }

    if (this.password !== this.confirmPassword) {
      console.error('Passwords do not match.');
      return; // Handle password mismatch
    }

    // Implement sign-up logic here, e.g., validation, API call, etc.
    console.log('Sign up:', this.name, this.email, this.password);

    // After successful sign-up, navigate to the login page or another page
    this.router.navigate(['/login']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
