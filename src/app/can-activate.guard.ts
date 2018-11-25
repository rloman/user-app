import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './admin/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }
    else {
      // Store the attempted URL for redirecting
      this.authService.redirectUrl = url;

      // Navigate to the login page with extras
      this.router.navigate(['/login']);
      
      return false;
    }
  }
}
/*
@Injectable()
export class CanActivateGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService

  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.authenticationService.isLoggedIn()) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url and return false
    this.router.navigate(['/login']);
    return false;
  }
}


*/