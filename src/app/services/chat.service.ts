import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private baseUrl = 'http://localhost:8000';
  constructor(private http: HttpClient) {}

  
  private handleError(error: any) {
    console.error('Erreur lors de la récupération des données :', error);
    return throwError(error);
  }

  getAllMessages(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/messages`);
  }

  sendMessage(content: string, utilisateur_id: number, conversation_id: number): Observable<any> {
    const data = {
      content: content,
      utilisateur_id: utilisateur_id,
      conversation_id: conversation_id
    };
    return this.http.post<any>(`${this.baseUrl}/messages/send`, data);
  }

}