import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  private user: User; // or add with = new User();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
  }

  create(): void {
   this.userService.create(this.user).subscribe(user => {
      console.log("Created user");
      this.ngOnInit();
   });
  }

}
