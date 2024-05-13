import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUp } from '../models/signup';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  apiUrl = 'http://localhost:8000'; // Mettez ici l'URL de votre API Symfony
  isLoggedIn: boolean = false; // Ajout de la propriété isLoggedIn

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/insertionUser`, user);
  }

  login(email: string, password: string): Observable<any> {
    // Logique de connexion
    return this.http.get(`${this.apiUrl}/getParEmail/${email}/${password}`);
  }

  // Met à jour l'état de connexion après une connexion réussie
  updateLoginStatus(status: boolean) {
    this.isLoggedIn = status;
  }
}