import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { goulettetg1 } from '../models/goulettetg1';

@Injectable({
  providedIn: 'root'
})
export class Goulettetg1Service {

  
  private apiUrl = 'http://127.0.0.1:8000/goulettetg1/'; // URL de base de l'API
    
  constructor(private http: HttpClient) { }

  getVal(): Observable<goulettetg1[]> {
    return this.http.get<goulettetg1[]>('${this.apiUrl}');
  }

  getValById(id: number): Observable<goulettetg1> {
    return this.http.get<goulettetg1>('${this.apiUrl}/${id}');
  }

  addVal(goulettetg1:goulettetg1): Observable<goulettetg1> {
    return this.http.post<goulettetg1>(this.apiUrl,goulettetg1);
  }

  updateVal(id: number,goulettetg1:goulettetg1): Observable<goulettetg1> {
    return this.http.put<goulettetg1>('${this.apiUrl}/${id}',goulettetg1);
  }

  deleteVal(id: number): Observable<any> {
    return this.http.delete('${this.apiUrl}/${id}');
  }
}