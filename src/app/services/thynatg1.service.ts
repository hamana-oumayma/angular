import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { thynatg1 } from '../models/thynatg1';

@Injectable({
  providedIn: 'root'
})
export class Thynatg1Service {

  private apiUrl = 'http://127.0.0.1:8000/thynatg1/'; // URL de base de l'API
    
  constructor(private http: HttpClient) { }

  getVal(): Observable<thynatg1[]> {
    return this.http.get<thynatg1[]>('${this.apiUrl}');
  }

  getValById(id: number): Observable<thynatg1> {
    return this.http.get<thynatg1>('${this.apiUrl}/${id}');
  }

  addVal(thynatg1:thynatg1): Observable<thynatg1> {
    return this.http.post<thynatg1>(this.apiUrl,thynatg1);
  }

  updateVal(id: number,thynatg1:thynatg1): Observable<thynatg1> {
    return this.http.put<thynatg1>('${this.apiUrl}/${id}',thynatg1);
  }

  deleteVal(id: number): Observable<any> {
    return this.http.delete('${this.apiUrl}/${id}');
  }
}