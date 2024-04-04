import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conversation, Message } from '../models/conversation';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {
  private apiUrl = 'http://127.0.0.1:8000/conversations/';

  constructor(private http: HttpClient) {}

  getConversations(): Observable<Conversation[]> {
    return this.http.get<Conversation[]>(this.apiUrl);
  }

  getMessages(conversationId: number): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiUrl}/${conversationId}/messages`);
  }

  sendMessage(conversationId: number, message: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${conversationId}/messages`, { message });
  }
}