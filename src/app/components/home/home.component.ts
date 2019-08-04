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

  constructor(private todoListservice: TodolistService) { 
    let task = new Task(undefined, undefined, undefined, undefined, undefined, undefined); 

    this.todoListservice.getAllTask(task,  1,  4)
      .subscribe((data: any) => { 
        console.log({ data });
       this.tasks = data.data;
      }, (errorService) => {
        
          console.log('Error in service');
      });

  }

  ngOnInit() {
  }

}
