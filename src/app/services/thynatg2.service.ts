import { Injectable } from '@angular/core';
import { thynatg2 } from '../models/thynatg2';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Thynatg2Service {
  private apiUrl = 'http://127.0.0.1:8000/thynatg2/'; // URL de base de l'API
    
  constructor(private http: HttpClient) { }

  getVal(): Observable<thynatg2[]> {
    return this.http.get<thynatg2[]>('${this.apiUrl}');
  }

  getValById(id: number): Observable<thynatg2> {
    return this.http.get<thynatg2>('${this.apiUrl}/${id}');
  }

  addVal(thynatg2:thynatg2): Observable<thynatg2> {
    return this.http.post<thynatg2>(this.apiUrl,thynatg2);
  }

  updateVal(id: number,thynatg2:thynatg2): Observable<thynatg2> {
    return this.http.put<thynatg2>('${this.apiUrl}/${id}',thynatg2);
  }

  deleteVal(id: number): Observable<any> {
    return this.http.delete('${this.apiUrl}/${id}');
  }
}