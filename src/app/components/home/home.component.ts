import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodolistService } from '../../services/todolist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private todoListservice: TodolistService) { 
    this.todoListservice.getAllTask()
      .subscribe((data: any) => { 
        console.log(data);
      }, (errorService) => {
          console.log(this.todoListservice.getAllTaskFromMock());
          console.log('Error in service');
      });

  }

  ngOnInit() {
  }

}
