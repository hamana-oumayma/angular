import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Report } from '../models/Report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private apiUrl = 'http://localhost:8000'; // URL de l'API Symfony

  constructor(private http: HttpClient) { }

  // Méthode pour créer un nouveau rapport
  createReport(reportData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/report/new`, reportData).pipe(
      catchError(this.handleError)
    );
  }
  downloadReport(id: number): Observable<Blob> {
    const url = `${this.apiUrl}/download-report/${id}`; // Mettez à jour l'URL avec votre endpoint de téléchargement
    return this.http.get(url, { responseType: 'blob' }).pipe(
      catchError(this.handleError)
    );
  }
  // Méthode pour récupérer tous les rapports
  // Méthode pour récupérer tous les rapports
getAllReports(): Observable<Report[]> {
  return this.http.get<any[]>(`${this.apiUrl}/reports`).pipe(
    map(reports => reports.map(report => this.transformDate(report))),
    catchError(this.handleError)
  );
}

// Transformer la date de type string en objet Date
private transformDate(report: any): Report {
  return {
    ...report,
    date: new Date(report.date)
  };
}


  // Méthode pour récupérer un rapport par ID
  getReportById(id: number): Observable<Report> {
    return this.http.get<any>(`${this.apiUrl}/report/${id}`).pipe(
      map(report => this.transformDate(report)),
      catchError(this.handleError)
    );
  }

  // Méthode pour mettre à jour un rapport
  updateReport(id: number, report: Report): Observable<any> {
    return this.http.put(`${this.apiUrl}/report/${id}/edit`, report).pipe(
      catchError(this.handleError)
    );
  }

  // Méthode pour supprimer un rapport
  deleteReport(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/report/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Gestion des erreurs
  private handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      console.error('An error occurred:', error.error.message);
    } else {
      // Erreur côté serveur
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }
    // Renvoyer une erreur observable avec un message utilisateur convivial
    return throwError('Something bad happened; please try again later.');
  }
}