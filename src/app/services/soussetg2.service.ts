import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { soussetg2 } from '../models/soussetg2';

@Injectable({
  providedIn: 'root'
})
export class Soussetg2Service {

  private apiUrl = 'http://127.0.0.1:8000/soussetg2/'; // URL de base de l'API
    
  constructor(private http: HttpClient) { }

  getVal(): Observable<soussetg2[]> {
    return this.http.get<soussetg2[]>('${this.apiUrl}');
  }

  getValById(id: number): Observable<soussetg2> {
    return this.http.get<soussetg2>('${this.apiUrl}/${id}');
  }

  addVal(soussetg2:soussetg2): Observable<soussetg2> {
    return this.http.post<soussetg2>(this.apiUrl,soussetg2);
  }

  updateVal(id: number,soussetg2:soussetg2): Observable<soussetg2> {
    return this.http.put<soussetg2>('${this.apiUrl}/${id}',soussetg2);
  }

  deleteVal(id: number): Observable<any> {
    return this.http.delete('${this.apiUrl}/${id}');
  }
}