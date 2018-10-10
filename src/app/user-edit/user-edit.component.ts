import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  private user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

 // @PostConstruct :-) // fetching our task using the id since we are sending it using a GET request
 ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];

    this.userService.findById(id).subscribe( user => {
      this.user = user;
    })
  }

  update(): void {
    this.userService.update(this.user).subscribe(updatedUser => {
      console.log("Updated in Component: " + updatedUser.id)
      this.router.navigate(["users", this.user.id]);
    });
  }
}
