import { Component, OnInit, Input } from '@angular/core';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent  {


  @Input() items: any[] = [];
  constructor( private service: TodolistService) { }
  
  redirect(path:string) { 
    this.service.redirect(path);
  }
  
}
