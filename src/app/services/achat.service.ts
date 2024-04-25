import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Achat } from '../models/Achat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AchatService {
  private apiUrl = 'http://localhost:8000/achat'; // Remplacez cette URL par l'URL de votre API Symfony

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer la liste des achats depuis l'API
  getAchats(): Observable<Achat[]> {
    return this.http.get<Achat[]>(this.apiUrl);
  }

  // Méthode pour créer un nouvel achat via l'API
  createAchat(achat: Achat): Observable<any> {
    return this.http.post<any>(this.apiUrl, achat);
  }
  deleteAchat(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}