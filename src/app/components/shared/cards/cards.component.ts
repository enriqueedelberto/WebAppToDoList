import { Component, OnInit, Input } from '@angular/core';
import { TodolistService } from 'src/app/services/todolist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent  {


  @Input() items: any[] = [];
  constructor(private service: TodolistService,
    private router: Router ) { }
  
  redirect(path: string) { 
    debugger;
    this.service.redirect(path);
  }
  
}
