import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";
import {ParentDashboardComponent} from "./components/parent-dashboard/parent-dashboard.component";
import {TeacherDashboardComponent} from "./components/teacher-dashboard/teacher-dashboard.component";
import {SignupComponent} from "./components/signup/signup.component";
import {StudentDashboardComponent} from "./components/student-dashboard/student-dashboard.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },              // Home Page route
  { path: 'login', component: LoginComponent },          // Login Page route
  { path: 'admin-dashboard', component: AdminDashboardComponent },  // Admin Dashboard route
  {path: 'parent-dashboard', component: ParentDashboardComponent},
  {path: 'teacher-dashboard', component: TeacherDashboardComponent},
  {path:'signup',component:SignupComponent},
  {path:'student-dashboard',component:StudentDashboardComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }       // Catch-all route, moved to the end
];
