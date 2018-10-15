import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit, OnDestroy {


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

  delete(): void {
    this.userService.delete(this.user).subscribe(victim => {
        // console.log(`Deleted user ${victim.id}`);
        this.router.navigate(['/users']);
    });
  }

  ngOnDestroy(): void {
   this.user = null;
   console.log(this.user);
   this.assert("user should be null", this.user == null);
  }

  assert(message, assertion): void {
    if(!assertion) {
      throw new Error(message);
    }
  }
}
