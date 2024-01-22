import { LoginComponent } from './pages/login/login.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: LoginComponent},
    { path:'home', component: HomeComponent }
];
