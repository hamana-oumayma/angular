import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { soussetg1 } from '../models/soussetg1'; // Import the corresponding model

@Injectable({
  providedIn: 'root'
})
export class Soussetg1Service {
  private apiUrl = 'http://127.0.0.1:8000/soussetg1'; // Update the API URL accordingly

  constructor(private http: HttpClient) { }

  getVal(): Observable<soussetg1[]> {
    return this.http.get<soussetg1[]>(`${this.apiUrl}`);
  }

  getValById(id: number): Observable<soussetg1> {
    return this.http.get<soussetg1>(`${this.apiUrl}/${id}`);
  }

  addVal(data: soussetg1): Observable<soussetg1> {
    return this.http.post<soussetg1>(this.apiUrl, data);
  }

  updateVal(id: number, data: soussetg1): Observable<soussetg1> {
    return this.http.put<soussetg1>(`${this.apiUrl}/${id}`, data);
  }

  deleteVal(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
