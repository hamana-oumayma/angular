import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bouchematg4 } from '../models/bouchemmatg4';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Bouchematg4Service {
    private apiUrl = 'http://127.0.0.1:8000/bouchematg4/'; // URL de base de l'API
    
    constructor(private http: HttpClient) { }
  
    getVal(): Observable<bouchematg4[]> {
      return this.http.get<bouchematg4[]>('${this.apiUrl}');
    }
  
    getValById(id: number): Observable<bouchematg4> {
      return this.http.get<bouchematg4>('${this.apiUrl}/${id}');
    }
  
    addVal(bouchematg4:bouchematg4): Observable<bouchematg4> {
      return this.http.post<bouchematg4>(this.apiUrl, bouchematg4);
    }
  
    updateVal(id: number, bouchematg4: bouchematg4): Observable<bouchematg4> {
      return this.http.put<bouchematg4>('${this.apiUrl}/${id}',bouchematg4);
    }
  
    deleteVal(id: number): Observable<any> {
      return this.http.delete('${this.apiUrl}/${id}');
    }
  }