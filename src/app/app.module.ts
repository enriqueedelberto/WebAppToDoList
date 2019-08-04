import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Router} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { TodolistService } from './services/todolist.service';
//se importan las rutas
import { ROUTES } from './app.route';
import { CardsComponent } from './components/shared/cards/cards.component';
import { UsersComponent } from './components/users/users.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    NavbarComponent,
    CardsComponent,
    UsersComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TodolistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
