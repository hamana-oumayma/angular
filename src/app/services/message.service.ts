import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/conversation';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = 'http://127.0.0.1:8000/messages/1'; // Définir l'URL avec l'ID de la conversation

  constructor(private http: HttpClient) {}

  getAllMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.apiUrl);
  }

  getMessageasByConversationId(conversationId: number): Observable<Message[]> {
    const url = `${this.apiUrl}?conversationId=${conversationId}`;
    return this.http.get<Message[]>(url);
  }

  createMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(this.apiUrl, message);
  }

  updateMessage(message: Message): Observable<Message> {
    const url = `${this.apiUrl}/${message.id}`;
    return this.http.put<Message>(url, message);
  }

  deleteMessage(messageId: number): Observable<void> {
    const url = `${this.apiUrl}/${messageId}`;
    return this.http.delete<void>(url);
  }

  
  sendMessage(messageContent: string): Observable<any> {
    const url = `${this.apiUrl}/sendMessage`; // Pas besoin de l'ID de la conversation ici
    return this.http.post<any>(url, { content: messageContent });
  }
}
