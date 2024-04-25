import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { thynatg2 } from '../models/thynatg2'; // Import the corresponding model

@Injectable({
  providedIn: 'root'
})
export class Thynatg2Service {
  private apiUrl = 'http://127.0.0.1:8000/thynatg2'; // Update the API URL accordingly

  constructor(private http: HttpClient) { }

  getVal(): Observable<thynatg2[]> {
    return this.http.get<thynatg2[]>(`${this.apiUrl}`);
  }

  getValById(id: number): Observable<thynatg2> {
    return this.http.get<thynatg2>(`${this.apiUrl}/${id}`);
  }

  addVal(data: thynatg2): Observable<thynatg2> {
    return this.http.post<thynatg2>(this.apiUrl, data);
  }

  updateVal(id: number, data: thynatg2): Observable<thynatg2> {
    return this.http.put<thynatg2>(`${this.apiUrl}/${id}`, data);
  }

  deleteVal(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
