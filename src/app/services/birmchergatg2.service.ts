import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { birmchergatg2 } from '../models/birmchergatg2';

@Injectable({
  providedIn: 'root'
})
export class Birmchergatg2Service {
  private apiUrl = 'http://127.0.0.1:8000/birmchergatg2/'; // URL de base de l'API
  
    constructor(private http: HttpClient) { }
  
    getVal(): Observable<birmchergatg2[]> {
      return this.http.get<birmchergatg2[]>(`${this.apiUrl}`);
    }
  
    getValById(id: number): Observable<birmchergatg2> {
      return this.http.get<birmchergatg2>(`${this.apiUrl}/${id}`);
    }
  
    addVal(depot:birmchergatg2): Observable<birmchergatg2> {
      return this.http.post<birmchergatg2>(this.apiUrl, depot);
    }
  
    updateVal(id: number, birmchergatg2:birmchergatg2): Observable<birmchergatg2> {
      return this.http.put<birmchergatg2>(`${this.apiUrl}/${id}`, birmchergatg2);
    }
  
    deleteVal(id: number): Observable<any> {
      return this.http.delete(`${this.apiUrl}/${id}`);
    }
 }