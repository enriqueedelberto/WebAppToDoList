import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  constructor(private http: HttpClient) {
    console.log('Service is ok');
   }

  getQuery(query: string) { 
    return this.http.get(urlApi, httpOptions);
  }


   //Servicio GetAllTasks
  getAllTask() { 
    return this.getQuery(`api/Task/GetTask`); 
  }

  
  

}
