import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "http://jsonplaceholder.typicode.com"; // this will change during dev, test, acct and production environment

  private endpoint: string = "users";

  // private httpClient: HttpClient;

   constructor(private httpClient: HttpClient) { // this result in the (commented) field above ... 

   }

  get(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.url}/${this.endpoint}`);
  }

  create(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.url}/${this.endpoint}`, user);
  }
}
