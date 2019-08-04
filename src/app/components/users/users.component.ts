import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../models/user';
import { USERS } from '../../services/mock-service';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = USERS;

  @Input() items: any[] = [];
  constructor(private service: TodolistService) {
    
    let user = new User(undefined, undefined, undefined, undefined,undefined, undefined, undefined); 

    this.service.getAllUsers(user,  1,  4)
      .subscribe((data: any) => { 
        console.log({ data });
        this.users = data.data;
      }, (errorService) => {
        
          console.log('Error in service');
      });
   }
  

  ngOnInit() {
   
  }

}
