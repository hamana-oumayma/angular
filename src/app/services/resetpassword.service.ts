import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetpasswordService {

  
  apiUrl = 'http://127.0.0.1:8000'; // Mettez ici l'URL de votre API Symfony

  constructor(private http: HttpClient) { }

  resetPassword(email: string, newPassword: string): Observable<any> {
    const payload = { email, newPassword };
    return this.http.post(`${this.apiUrl}/reset-password`, payload);
  }
}