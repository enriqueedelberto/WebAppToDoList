import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodolistService } from '../../services/todolist.service';
import { Task } from '../../models/task';
import { TASKS } from '../../services/mock-service';
import { debug } from 'util';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  tasks = TASKS;
  loading: boolean;
  error: boolean;
  messageError: string;
  constructor(private todoListservice: TodolistService) { 
    let task = new Task(undefined, undefined, undefined, undefined, undefined, undefined); 
    this.loading= true;
    this.todoListservice.getAllTask(task,  1,  4)
      .subscribe((data: any) => { 
      
        this.tasks = data.data;
        this.loading = false;
      }, (errorService) => {
          this.loading = false;
          this.error = true;
          this.messageError = errorService.message;
          
      });

  }



  ngOnInit() {
  }

}
