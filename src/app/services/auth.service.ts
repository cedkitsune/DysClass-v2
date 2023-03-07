import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/enseignants.model';

const AUTH_APIE = 'http://localhost:4000/enseignant/';
const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_APIE + 'login', { email, password }, httpOptions);
  }
  register(userName: string, email:string, password: string): Observable<User> {
    console.log(userName, email, password);
    return this.http.post(AUTH_APIE + "register", { userName, email, password}, httpOptions);
  }
}
