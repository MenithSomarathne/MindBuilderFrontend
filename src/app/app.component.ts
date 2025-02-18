import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],  // Import RouterModule
  template: `<router-outlet></router-outlet>`, // Loads routed components
})
export class AppComponent {}
