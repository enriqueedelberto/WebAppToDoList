import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Task } from '../../models/task';
import { TodolistService } from 'src/app/services/todolist.service';
import { User } from 'src/app/models/user';
import { debug } from 'util';
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input() task: Task;
  lstUsers: User[] = [];
  lstStatuses: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TodolistService,
    private location: Location) {
    this.task = new Task('', '', '', '', '', '');

    let user = new User(undefined, undefined, undefined, undefined,undefined, undefined, undefined); 
    

    //Get users to fill dropdown
    this.service.getAllUsers(user)
    .subscribe((data: any) => { 
     
      this.lstUsers = data.data;
    }, (errorService) => {
      
        console.log('Error in service');
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

  save(): void { 
    console.log(this.task);

    this.service.saveTask(this.task)
      .subscribe((data: any) => { 
      console.log({ data });
        this.service.redirect('/home');
        
    }, (errorService) => {
      debugger
        console.log('Error in service');
    });
      
      
  }

}
