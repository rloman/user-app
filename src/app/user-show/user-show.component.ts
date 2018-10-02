import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {


  private user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

 // @PostConstruct :-) // fetching our task using the id since we are sending it using a GET request
 ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];

    this.userService.findById(id).subscribe( user => {
      this.user = user;
    })
  }
}
