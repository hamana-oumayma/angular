import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Task } from './tasks.model'; 
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8000/tasks'; // Utilisez l'URL correcte de votre API Symfony

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  createTask(taskData: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, taskData)
      .pipe(
        catchError(this.handleError)
      );
  }
  updateTask(taskId: number, taskData: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${taskId}`, taskData)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteTask(taskId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${taskId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 400) {
      return throwError('Missing required data');
    } else if (error.status === 404) {
      return throwError('Task not found');
    } else {
      console.error('An error occurred:', error.error);
      return throwError('Something bad happened; please try again later.');
    }
  }
}