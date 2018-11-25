import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private realm = {

    ray: "flowers"

  }

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(username, password): Observable<boolean> {

    let result;

    if(this.realm.ray === password) {
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
