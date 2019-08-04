import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Task } from '../../models/task';
import { TodolistService } from 'src/app/services/todolist.service';
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service: TodolistService,
    private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  save(): void { 
    
  }

}
