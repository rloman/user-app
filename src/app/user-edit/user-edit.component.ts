import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CanComponentDeactivate } from '../can-deactivate.guard';
import { Observable } from 'rxjs';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, CanComponentDeactivate {

  private user: User;

  private editUser: User;

  private saving: boolean = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService
  ) { }

  // @PostConstruct :-) // fetching our task using the id since we are sending it using a GET request
  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];

    this.userService.findById(id).subscribe(user => {

      this.user = user;
      
      // save the user for later to test if it is changed here! (might be a better way :-)
      this.editUser = new User();
      this.editUser.id = user.id;
      this.editUser.name = user.name;
      this.editUser.username = user.username;
      this.editUser.email = user.email;
    })
  }

  onLeave(): boolean | Observable<boolean> | Promise<boolean> {

    // be aware of order this.user fails since this.user seems not to be a User (typeof is object)
    if(this.saving) {
      return true;
    }
    else {
      if(this.editUser.equals(this.user)) {
        console.log("no changes!");
        return true;
      }
      else {
        console.log("Changes detected");
  
        console.log(this.user);
        console.log(this.editUser);
  
        return this.dialogService.confirm("Abandon changes?");
      }
    }
    
  }

  update(): void {
    
    this.userService.update(this.user).subscribe(updatedUser => {
      console.log("Updated in Component: " + updatedUser.id)
      this.saving = true;
      this.router.navigate(["users", this.user.id]);
    });
  }
}
