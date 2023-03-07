import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  private url = 'http://localhost:4000/enseignant/'; // URL de l'API

  constructor(private http: HttpClient) { }

  // Récupérer tous les enseignants
  getAllEnseignants() {
    return this.http.get(this.url);
  }
}
