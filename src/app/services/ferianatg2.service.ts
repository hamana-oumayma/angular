import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ferianatg2 } from '../models/ferianatg2';

@Injectable({
  providedIn: 'root'
})
export class Ferianatg2Service {
  private apiUrl = 'http://127.0.0.1:8000/ferianatg2';

  constructor(private http: HttpClient) { }

  getVal(): Observable<ferianatg2[]> {
    return this.http.get<ferianatg2[]>(`${this.apiUrl}`);
  }

  getValById(id: number): Observable<ferianatg2> {
    return this.http.get<ferianatg2>(`${this.apiUrl}/${id}`);
  }

  addVal(depot: ferianatg2): Observable<ferianatg2> {
    return this.http.post<ferianatg2>(this.apiUrl, depot);
  }

  updateVal(id: number, ferianatg2: ferianatg2): Observable<ferianatg2> {
    return this.http.put<ferianatg2>(`${this.apiUrl}/${id}`, ferianatg2);
  }

  deleteVal(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
