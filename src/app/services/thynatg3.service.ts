import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { thynatg3 } from '../models/thynatg3'; // Import the corresponding model

@Injectable({
  providedIn: 'root'
})
export class Thynatg3Service {
  private apiUrl = 'http://127.0.0.1:8000/thynatg3'; // Update the API URL accordingly

  constructor(private http: HttpClient) { }

  getVal(): Observable<thynatg3[]> {
    return this.http.get<thynatg3[]>(`${this.apiUrl}`);
  }

  getValById(id: number): Observable<thynatg3> {
    return this.http.get<thynatg3>(`${this.apiUrl}/${id}`);
  }

  addVal(data: thynatg3): Observable<thynatg3> {
    return this.http.post<thynatg3>(this.apiUrl, data);
  }

  updateVal(id: number, data: thynatg3): Observable<thynatg3> {
    return this.http.put<thynatg3>(`${this.apiUrl}/${id}`, data);
  }

  deleteVal(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
