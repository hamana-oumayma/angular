import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUp } from '../models/signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signUp(signUpData: SignUp): Observable<any> {
    return this.http.post<any>('http://localhost:8000/signup', signUpData);
  }
}