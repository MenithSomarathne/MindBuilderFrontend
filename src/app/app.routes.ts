import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },    // Home Page route
  { path: 'login', component: LoginComponent },  // Login Page route
  { path: '**', redirectTo: '', pathMatch: 'full' },  // Catch-all route
];
