import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Task } from '../models/task';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const urlApi = environment.url_Api;
@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(private http: HttpClient,
    private router: Router) {
    console.log('Service is ok');
   }

//function for Redirecting
  redirect(path: string) { 
    this.router.navigate([path]);

  }
  
  getQuery(query: string) { 
    return this.http.get(urlApi, httpOptions);
  }


   //Servicio GetAllTasks
  getAllTask() { 
    return this.getQuery(`api/Task/GetTask`); 
  }

  saveTask(task: Task) { 
    return this.http.post<Task>(urlApi, task, httpOptions); 
  }

  
  

}
