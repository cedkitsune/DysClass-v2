import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/enseignants.model';

const AUTH_API = 'http://localhost:4000/enseignant/';
const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', { email, password }, httpOptions);
  }
  register(userName: string, email:string, password: string): Observable<User> {
    return this.http.post(AUTH_API + "register", { userName, email, password}, httpOptions);
  }
}
