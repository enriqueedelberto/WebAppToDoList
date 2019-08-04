import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { UsersComponent } from './components/users/users.component';


//Se agregan todas las rutas
export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}

];