import { Routes } from '@angular/router';
import { LoginComponent } from './Core/auth/login/login.component';
import { MainPageComponent } from './Components/main-page/main-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'mainpage', component: MainPageComponent },
];
