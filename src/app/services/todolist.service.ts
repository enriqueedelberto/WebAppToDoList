import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Task } from '../models/task';

import { User } from '../models/user';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const urlApi = `${environment.url_Api}/api/`;
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
    return this.http.get(urlApi + query, httpOptions);
  }


   //Servicio GetAllTasks
  getAllTask(task: Task, pageIndex:number = 1, pageSize: number = 5 ) {
    
    let params = new HttpParams();

    // Begin assigning parameters
    
      params = params.append('id_task', task.id_task ? task.id_task :'');
      params = params.append('title_task', task.title_task? task.title_task :'');
      params = params.append('cd_task', task.cd_task? task.cd_task :'');
      params = params.append('desc_task', task.desc_task? task.desc_task :'');
   
    

    return this.http.get(`${urlApi}Task/GetTasks`, { params: params}); 
  }

  //Servicio GetAllTasks
  searchTaskByTitle(task: Task, pageIndex:number = 1, pageSize: number = 5 ) {
    
    let params = new HttpParams();

    // Begin assigning parameters
     
      
      params = params.append('title_task', task.title_task? task.title_task :'');
     
    
    

    return this.http.get(`${urlApi}Task/GetTasks`, { params: params}); 
  }
  
  saveTask(task: Task) { 
    debugger
  return this.http.post(`${urlApi}Task/saveTask`, task) ;
  }

 updateTask(task: Task) { 
    debugger
   this.http.post<Task>(`${urlApi}Task/updateTask`, task)
      .subscribe(() => this.redirect('/home'));
  }

   //Service GetAllTasks
   getAllUsers(user: User, pageIndex:any = "1", pageSize: any = "5" ) {
    
    let params = new HttpParams();

    // Begin assigning parameters
    
    params = params.append('pageIndex', pageIndex);
    params = params.append('pageSize', pageSize);
    

    return this.http.get(`${urlApi}User/GetUsers`, { params: params}); 
   }
  
   //Service GetAllStatuses
   getAllStatuses() {
    
     
    return this.http.get(`${urlApi}Task/GetStatuses`); 
  }
  

}
