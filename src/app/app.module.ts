import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Router} from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { TaskComponent } from './components/task/task.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//se importan las rutas
import { ROUTES } from './app.route';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    TaskComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
