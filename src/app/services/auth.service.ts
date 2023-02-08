import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User} from '../models/enseignants.model';

const AUTH_API = 'http://localhost:4000/enseignant/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  //cette méthode envoie vers le back une requête vers enseignant/login avec un body qui contient un email et un password. Le back reconnaitra l'url et effectuera un login si les infos sont correctes : il retournera un token et les infos sur le user connecté
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(
      AUTH_API + 'login',
      { email, password },
      httpOptions
    );
  }

  //cette méthode envoie vers le back une requête ver enseignant/register avec un body qui contient login, email et password. Le back reconnaitra l'url et effectuera la création d'un user.
  register( userName: string, email: string, password: string): Observable<User> {
    return this.http.post<User>(
      AUTH_API + 'register',
      { userName, email, password },
      httpOptions
    );
  }
}