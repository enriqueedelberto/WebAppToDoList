import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Router} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { TaskComponent } from './components/task/task.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { TodolistService } from './services/todolist.service';
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
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [TodolistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
