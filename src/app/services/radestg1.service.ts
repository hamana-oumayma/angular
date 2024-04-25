import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { radestg1 } from '../models/radestg1'; // Import the corresponding model

@Injectable({
  providedIn: 'root'
})
export class Radestg1Service {
  private apiUrl = 'http://127.0.0.1:8000/radestg1'; // Update the API URL accordingly

  constructor(private http: HttpClient) { }

  getVal(): Observable<radestg1[]> {
    return this.http.get<radestg1[]>(`${this.apiUrl}`);
  }

  getValById(id: number): Observable<radestg1> {
    return this.http.get<radestg1>(`${this.apiUrl}/${id}`);
  }

  addVal(data: radestg1): Observable<radestg1> {
    return this.http.post<radestg1>(this.apiUrl, data);
  }

  updateVal(id: number, data: radestg1): Observable<radestg1> {
    return this.http.put<radestg1>(`${this.apiUrl}/${id}`, data);
  }

  deleteVal(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
