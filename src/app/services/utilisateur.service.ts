import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private apiUrl = 'http://127.0.0.1:8000/utilisateurs'; // Mettez à jour l'URL avec votre propre endpoint
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.apiUrl);
  }

  getUserById(userId: number): Observable<Utilisateur> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get<Utilisateur>(url);
  }

  createUser(user: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.apiUrl, user);
  }

  updateUser(user: Utilisateur): Observable<Utilisateur> {
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.put<Utilisateur>(url, user);
  }

  deleteUser(userId: number): Observable<void> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.delete<void>(url);
  }
}