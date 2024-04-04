import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { birmchergatg3 } from '../models/birmchergatg3';

@Injectable({
  providedIn: 'root'
})
export class Birmchergatg3Service {
    private apiUrl = 'http://127.0.0.1:8000/birmchergatg3/'; // URL de base de l'API
  
    constructor(private http: HttpClient) { }
  
    getVal(): Observable<birmchergatg3[]> {
      return this.http.get<birmchergatg3[]>(`${this.apiUrl}`);
    }
  
    getValById(id: number): Observable<birmchergatg3> {
      return this.http.get<birmchergatg3>(`${this.apiUrl}/${id}`);
    }
  
    addVal(depot:birmchergatg3): Observable<birmchergatg3> {
      return this.http.post<birmchergatg3>(this.apiUrl, depot);
    }
  
    updateVal(id: number, birmchergatg3: birmchergatg3): Observable<birmchergatg3> {
      return this.http.put<birmchergatg3>(`${this.apiUrl}/${id}`, birmchergatg3);
    }
  
    deleteVal(id: number): Observable<any> {
      return this.http.delete(`${this.apiUrl}/${id}`);
    }
 }