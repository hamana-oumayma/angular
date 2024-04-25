import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from '../models/Report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private apiUrl = 'http://localhost:8000'; // Symfony API URL

  constructor(private http: HttpClient) { }

  // Method to create a new report
  createReport(report: Report): Observable<any> {
    return this.http.post(`${this.apiUrl}/report/new`, report); // Correction de l'URL
  }

  // Method to retrieve all reports
  getAllReports(): Observable<Report[]> {
    return this.http.get<Report[]>(`${this.apiUrl}/reports`);
  }

  // Method to retrieve a report by ID
  getReportById(id: number): Observable<Report> {
    return this.http.get<Report>(`${this.apiUrl}/report/${id}`);
  }

  // Method to update a report
  updateReport(id: number, report: Report): Observable<any> {
    return this.http.put(`${this.apiUrl}/report/${id}/edit`, report);
  }

  // Method to delete a report
  deleteReport(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/report/${id}`);
  }
}