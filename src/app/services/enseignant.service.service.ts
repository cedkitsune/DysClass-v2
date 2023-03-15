import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnseignantService {
  private Url = 'http://localhost:4000/enseignant/';
  // URL de l'API:

  constructor(private http: HttpClient) {}
  // j'appelle les methode crud qui se ce trouve dans les routes de l'api
  // pour avoir les information avec l'id de l'eanseignant
  getOneEnseignant(id: string): Observable<any> {
    const url = `${this.Url}/${id}`;
    return this.http.get<any>(url);
  }
  // update de l'enseignant
  updateEnseignant(user: any): Observable<any> {
    const url = `${this.Url}/update/${user._id}`;
    return this.http.put(url, user);
  }
  // le delete
  deleteEnseignant(id: string): Observable<any> {
    const url = `${this.Url}/delete/${id}`;
    return this.http.delete(url);
  }
}
