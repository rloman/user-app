import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users: User[];

  private user: User;

	// dependency injects the userService here as a field / instance var
  constructor(private userService: UserService) {

   }

  ngOnInit() {
     this.userService.list().subscribe(users => {
      this.users = users;
    });
  }

  onSelect(user): void{
    console.log(user);
  }

}
