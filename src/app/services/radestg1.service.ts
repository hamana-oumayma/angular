import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { radestg1 } from '../models/radestg1';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Radestg1Service {

  private apiUrl = 'http://127.0.0.1:8000/rades/'; // URL de base de l'API
    
  constructor(private http: HttpClient) { }

  getVal(): Observable<radestg1[]> {
    return this.http.get<radestg1[]>('${this.apiUrl}');
  }

  getValById(id: number): Observable<radestg1> {
    return this.http.get<radestg1>('${this.apiUrl}/${id}');
  }

  addVal(radestg1:radestg1): Observable<radestg1> {
    return this.http.post<radestg1>(this.apiUrl,radestg1);
  }

  updateVal(id: number,radestg1:radestg1): Observable<radestg1> {
    return this.http.put<radestg1>('${this.apiUrl}/${id}',radestg1);
  }

  deleteVal(id: number): Observable<any> {
    return this.http.delete('${this.apiUrl}/${id}');
  }
}