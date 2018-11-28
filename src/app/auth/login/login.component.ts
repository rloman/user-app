import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../admin/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  message: string;

  private username: string;
  private password: string;
 
  constructor(private authService: AuthService, private router: Router) {
    this.setMessage();
  }
 
  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }
 
  login() {
    this.message = 'Trying to log in ...';

    this.authService.login(this.username, this.password).subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/crisis-center/admin';
 
        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }
 
  logout() {
    this.authService.logout();
    this.setMessage();
  }


}
