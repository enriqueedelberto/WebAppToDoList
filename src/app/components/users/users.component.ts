import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { USERS } from '../../services/mock-service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = USERS;



  

  ngOnInit() {
   
  }

}
