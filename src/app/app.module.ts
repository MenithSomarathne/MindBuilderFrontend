import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home-component/home-component.component';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  // Correctly import here for global use
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
