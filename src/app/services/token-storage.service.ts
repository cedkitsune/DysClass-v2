import { Injectable } from '@angular/core';

// constant des tokens pour l'authentification
const TOKEN_KEY = "auth-token";
const USER_KEY = "auth-user";

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

//effacer le token quand l'utilisateur se deconnecte
  signOut(): void {
    window.sessionStorage.clear()
  }

  // cette méthode récupère le token envoyé depuis le back et le stocke dans sessionStorage (elle supprime celui déjà existant le cas échéant)
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  //cette méthode récupère le token du user connecté dans le sessionsStorage
  public getToken(): string | null {
    // console.log(sessionStorage)
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  //cette méthode récupère les infos du user envoyées depuis le back et les stockent dans le sessionsStorage (elle supprime celles déjà existantes le cas échéant)
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  //cette méthode récupère les infos sur le user connecté dans le sessionStorage
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if(user) {
      return JSON.parse(user);
    }
  }
}
