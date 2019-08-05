import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TodolistService } from 'src/app/services/todolist.service';
import { TASKS } from 'src/app/services/mock-service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  tasks = TASKS;
  loading: boolean;
  constructor(private todoListservice: TodolistService) { 

     
  }

  ngOnInit() {
  }

  
  searchTaskByTitle(title_task: string) { 
    
    let task = new Task(undefined, undefined, title_task, undefined, undefined, undefined); 
    this.loading = true;
    this.todoListservice.searchTaskByTitle(task, undefined, undefined).subscribe((data: any) => { 
      console.log({ data });
      this.loading = false;
      this.tasks = data.data;
     
    }, (errorService) => {
      this.loading = false;
        console.log('Error in service');
    });
  }

}
