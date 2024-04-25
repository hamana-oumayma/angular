import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { birmchergatg1 } from '../models/birmchergatg1';

@Injectable({
  providedIn: 'root'
})
export class Birmchergatg1Service {
  clearAlert() {
    throw new Error('Method not implemented.');
  }
  checkThreshold(indices: number[]): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/checkThreshold`, { indices }).pipe(
      catchError(error => this.handleError(error))
    );
  }
  private apiUrl = 'http://127.0.0.1:8000/birmchergatg1'; // URL de base de l'API
  public alertMessage: string = ''; 

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.error('Erreur lors de la récupération des données :', error);
    return throwError(error);
  }
  getVal(): Observable<birmchergatg1[]> {
    return this.http.get<birmchergatg1[]>(this.apiUrl).pipe(
      tap(response => console.log('Réponse de l\'API:', response)), // Affiche la réponse de l'API dans la console
      catchError(error => this.handleError(error))
    );
  }

  getValById(id: number): Observable<birmchergatg1> {
    return this.http.get<birmchergatg1>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => this.handleError(error))
    );
  }

  addVal(depot: birmchergatg1): Observable<birmchergatg1> {
    return this.http.post<birmchergatg1>(this.apiUrl, depot).pipe(
      catchError(error => this.handleError(error))
    );
  }

  updateVal(id: number, birmchergatg1: birmchergatg1): Observable<birmchergatg1> {
    return this.http.put<birmchergatg1>(`${this.apiUrl}/${id}`, birmchergatg1).pipe(
      catchError(error => this.handleError(error))
    );
  }
  

  deleteVal(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(error => this.handleError(error))
    );
  }
  showAlertModal(message: string): void {
    this.alertMessage = message; // Stockez le message d'alerte dans la variable
    // Ici, vous pouvez ajouter la logique pour afficher la modal selon votre implémentation
    // Vous pouvez par exemple définir un drapeau dans votre composant pour indiquer l'affichage de la modal
  }
  
}