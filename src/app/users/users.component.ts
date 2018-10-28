import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users$: Observable<User[]>;

	// dependency injects the userService here as a field / instance var
  constructor(private userService: UserService) {

   }

  ngOnInit() {
     this.users$ = this.userService.list();
  }
}
