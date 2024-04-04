import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { birmchergatg4 } from '../models/birmchergatg4';

@Injectable({
  providedIn: 'root'
})
export class Birmchergatg4Service {
  private apiUrl = 'http://127.0.0.1:8000/birmchergatg4/'; // URL de base de l'API
  
  constructor(private http: HttpClient) { }

  getVal(): Observable<birmchergatg4[]> {
    return this.http.get<birmchergatg4[]>(`${this.apiUrl}`);
  }

  getValById(id: number): Observable<birmchergatg4> {
    return this.http.get<birmchergatg4>(`${this.apiUrl}/${id}`);
  }

  addVal(depot:birmchergatg4): Observable<birmchergatg4> {
    return this.http.post<birmchergatg4>(this.apiUrl, depot);
  }

  updateVal(id: number, birmchergatg4: birmchergatg4): Observable<birmchergatg4> {
    return this.http.put<birmchergatg4>(`${this.apiUrl}/${id}`,birmchergatg4);
  }

  deleteVal(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}