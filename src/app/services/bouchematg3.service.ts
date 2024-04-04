import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { bouchematg3 } from '../models/bouchemmatg3';

@Injectable({
  providedIn: 'root'
})
export class Bouchematg3Service {
  private apiUrl = 'http://127.0.0.1:8000/bouchematg3/'; // URL de base de l'API
  
  constructor(private http: HttpClient) { }

  getVal(): Observable<bouchematg3[]> {
    return this.http.get<bouchematg3[]>('${this.apiUrl}');
  }

  getValById(id: number): Observable<bouchematg3> {
    return this.http.get<bouchematg3>('${this.apiUrl}/${id}');
  }

  addVal(bouchematg3:bouchematg3): Observable<bouchematg3> {
    return this.http.post<bouchematg3>(this.apiUrl, bouchematg3);
  }

  updateVal(id: number, bouchematg3: bouchematg3): Observable<bouchematg3> {
    return this.http.put<bouchematg3>('${this.apiUrl}/${id}',bouchematg3);
  }

  deleteVal(id: number): Observable<any> {
    return this.http.delete('${this.apiUrl}/${id}');
  }
}