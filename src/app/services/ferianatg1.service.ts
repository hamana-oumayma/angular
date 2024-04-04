import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ferianatg1 } from '../models/ferianatg1';

@Injectable({
  providedIn: 'root'
})
export class Ferianatg1Service {
  private apiUrl = 'http://127.0.0.1:8000/ferianatg1/'; // URL de base de l'API
    
  constructor(private http: HttpClient) { }

  getVal(): Observable<ferianatg1[]> {
    return this.http.get<ferianatg1[]>('${this.apiUrl}');
  }

  getValById(id: number): Observable<ferianatg1> {
    return this.http.get<ferianatg1>('${this.apiUrl}/${id}');
  }

  addVal(ferianatg1:ferianatg1): Observable<ferianatg1> {
    return this.http.post<ferianatg1>(this.apiUrl, ferianatg1);
  }

  updateVal(id: number,ferianatg1:ferianatg1): Observable<ferianatg1> {
    return this.http.put<ferianatg1>('${this.apiUrl}/${id}',ferianatg1);
  }

  deleteVal(id: number): Observable<any> {
    return this.http.delete('${this.apiUrl}/${id}');
  }
}