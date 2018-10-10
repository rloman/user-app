import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private url: string = "http://jsonplaceholder.typicode.com"; // this will change during dev, test, acct and production environment
  // private url: string = "http://localhost:8080/api"; // this will change during dev, test, acct and production environment
  private url = 'http://localhost:8081/api'; // this will change during dev, test, acct and production environment

  private endpoint: string = "users";

  // private httpClient: HttpClient;

   constructor(private httpClient: HttpClient) { // this result in the (commented) field above ... 

   }

  list(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.url}/${this.endpoint}`);
  }

  create(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.url}/${this.endpoint}`, user);
  }

  findById(id: Number): Observable<User> {
    return this.httpClient.get<User>(`${this.url}/${this.endpoint}/${id}`);
  }

  update(user: User): Observable<User> {
        return this.httpClient.put<User>(`${this.url}/${this.endpoint}/${user.id}`, user);
  }

  delete(user: User): Observable<User> {
    return this.httpClient.delete<User>(`${this.url}/${this.endpoint}/${user.id}`);
  }
}
