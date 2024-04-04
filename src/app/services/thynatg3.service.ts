import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { thynatg3 } from '../models/thynatg3';

@Injectable({
  providedIn: 'root'
})
export class Thynatg3Service {
  private apiUrl = 'http://127.0.0.1:8000/thynatg3/'; // URL de base de l'API
    
  constructor(private http: HttpClient) { }

  getVal(): Observable<thynatg3[]> {
    return this.http.get<thynatg3[]>('${this.apiUrl}');
  }

  getValById(id: number): Observable<thynatg3> {
    return this.http.get<thynatg3>('${this.apiUrl}/${id}');
  }

  addVal(thynatg3:thynatg3): Observable<thynatg3> {
    return this.http.post<thynatg3>(this.apiUrl,thynatg3);
  }

  updateVal(id: number,thynatg3:thynatg3): Observable<thynatg3> {
    return this.http.put<thynatg3>('${this.apiUrl}/${id}',thynatg3);
  }

  deleteVal(id: number): Observable<any> {
    return this.http.delete('${this.apiUrl}/${id}');
  }
}