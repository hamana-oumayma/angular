import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParticipantConversation } from '../models/participantconversation';

@Injectable({
  providedIn: 'root'
})
export class ParticipantconversationService {

  private apiUrl = 'http://127.0.0.1:8000/participant_conversations'; // Mettez à jour l'URL avec votre propre endpoint

  constructor(private http: HttpClient) {}

  getAllParticipants(): Observable<ParticipantConversation[]> { // Correction du type de retour
    return this.http.get<ParticipantConversation[]>(this.apiUrl);
  }

  getParticipantById(participantId: number): Observable<ParticipantConversation> {
    const url = `${this.apiUrl}/${participantId}`;
    return this.http.get<ParticipantConversation>(url);
  }

  createParticipant(participant: ParticipantConversation): Observable<ParticipantConversation> {
    return this.http.post<ParticipantConversation>(this.apiUrl, participant);
  }

  updateParticipant(participant: ParticipantConversation): Observable<ParticipantConversation> {
    const url = `${this.apiUrl}/${participant.id}`;
    return this.http.put<ParticipantConversation>(url, participant);
  }

  deleteParticipant(participantId: number): Observable<void> {
    const url = `${this.apiUrl}/${participantId}`;
    return this.http.delete<void>(url);
  }
}