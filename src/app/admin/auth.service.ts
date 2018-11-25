import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // a very, very simple realm
  private realm: {[key:string]:string;} = {

    rloman: "testing2018!",
    george: "testingwithgeorge"
  }

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(username, password): Observable<boolean> {

    let result;

    // validate the user
    if(this.realm[username] === password) {
      result = true;
    }
    else {
      result = false;
    }

    return of(result).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = result)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
