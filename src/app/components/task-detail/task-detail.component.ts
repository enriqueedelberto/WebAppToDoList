import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

import { Task } from '../../models/task';
import { TodolistService } from 'src/app/services/todolist.service';
import { User } from 'src/app/models/user';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  
  lstUsers: User[] = [];
  lstStatuses: any[] = [];
  loading: boolean;
  error: boolean;
  messageError: string;

  task: Task = {
    cd_task: 'abc',
    id_task: '1',
    title_task: 'acb',
    desc_task: '',
    status_task: '',
    cd_user: '',
    createdOnDate: new Date(),
    lasModifiedOnDate: new Date(),
    pageIndex: 1,
    pageSize: 10
     
  };
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TodolistService,
    private location: Location) {
    this.task = new Task('', '', '', '', '', '');

    let user = new User(null, null, null, null,null, null, null); 
    
    this.loading = true;
    //Get users to fill dropdown
    this.service.getAllUsers(user)
    .subscribe((data: any) => { 
      this.loading = false;
      this.lstUsers = data.data;
    }, (errorService) => {
      this.loading = false;
        console.log('Error in service');
        this.error = true;
          this.messageError = errorService.error.error.message;
      });
    
    //Get users to fill dropdown
    this.service.getAllStatuses()
    .subscribe((data: any) => { 
      
      this.lstStatuses = data.data;
    }, (errorService) => {
      
        console.log('Error in service');
    });
    
     }

 

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  save(forma: NgForm): void { 
    console.log(forma);
    if (!this.validarDatos(forma)) {
      return;
     }
      
    this.loading = true;
    this.service.saveTask(this.task)
      .subscribe((data: any) => { 
      console.log({ data });
        this.service.redirect('/home');
        this.loading = false;
        
      }, (errorService) => {
        this.loading = false;
      this.error = true;
      this.messageError = errorService.message;
        console.log('Error in service');
    });
      
      
  }

  validarDatos(formulario: any) {
    
    if (!formulario.valid) { 
      this.error = true;
      this.messageError = 'Some fields are required';
      return false;
    } 

    return true;
  }

}
