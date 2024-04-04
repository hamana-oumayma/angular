import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { bouchematg5 } from '../models/bouchemmatg5';

@Injectable({
  providedIn: 'root'
})
export class Bouchematg5Service {
  private apiUrl = 'http://127.0.0.1:8000/bouchematg5/'; // URL de base de l'API
    
  constructor(private http: HttpClient) { }

  getVal(): Observable<bouchematg5[]> {
    return this.http.get<bouchematg5[]>('${this.apiUrl}');
  }

  getValById(id: number): Observable<bouchematg5> {
    return this.http.get<bouchematg5>('${this.apiUrl}/${id}');
  }

  addVal(bouchematg5:bouchematg5): Observable<bouchematg5> {
    return this.http.post<bouchematg5>(this.apiUrl, bouchematg5);
  }

  updateVal(id: number, bouchematg5: bouchematg5): Observable<bouchematg5> {
    return this.http.put<bouchematg5>('${this.apiUrl}/${id}',bouchematg5);
  }

  deleteVal(id: number): Observable<any> {
    return this.http.delete('${this.apiUrl}/${id}');
  }
}