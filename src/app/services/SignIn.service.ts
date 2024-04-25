import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignIn } from '../models/SignIn';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  private signInUrl = 'http://localhost:8000/signin';
  constructor(private http: HttpClient) { }

  signIn(signInData: SignIn): Observable<any> {
    return this.http.post<any>(this.signInUrl, signInData);
  }
}