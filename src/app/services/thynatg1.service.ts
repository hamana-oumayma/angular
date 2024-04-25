import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { thynatg1 } from '../models/thynatg1'; // Import the corresponding model

@Injectable({
  providedIn: 'root'
})
export class Thynatg1Service {
  private apiUrl = 'http://127.0.0.1:8000/thynatg1'; // Update the API URL accordingly

  constructor(private http: HttpClient) { }

  getVal(): Observable<thynatg1[]> {
    return this.http.get<thynatg1[]>(`${this.apiUrl}`);
  }

  getValById(id: number): Observable<thynatg1> {
    return this.http.get<thynatg1>(`${this.apiUrl}/${id}`);
  }

  addVal(data: thynatg1): Observable<thynatg1> {
    return this.http.post<thynatg1>(this.apiUrl, data);
  }

  updateVal(id: number, data: thynatg1): Observable<thynatg1> {
    return this.http.put<thynatg1>(`${this.apiUrl}/${id}`, data);
  }

  deleteVal(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
