import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { UsersComponent } from './components/users/users.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { SearchComponent } from './components/search/search.component';


//Se agregan todas las rutas
export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'users', component: UsersComponent },
    { path: 'newtask', component: TaskDetailComponent },
    { path: 'newtask/:id_task', component: TaskDetailComponent },
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}

];