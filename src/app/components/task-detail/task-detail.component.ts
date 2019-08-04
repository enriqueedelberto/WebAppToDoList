import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Task } from '../../models/task';
import { TodolistService } from 'src/app/services/todolist.service';
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input() task: Task;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TodolistService,
    private location: Location) {
    this.task = new Task('','','','','','');
    
     }

 

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  save(): void { 
    console.log(this.task);

    this.service.saveTask(this.task);
    this.service.redirect('/home');
    
    
  }

}
