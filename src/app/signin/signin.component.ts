import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  SignInService } from '../services/SignIn.service';
import {  SignIn } from '../models/SignIn';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent  {
  signInData: SignIn = { email: '', password: '' };

  constructor(private signInService: SignInService) { }

  onSubmit(): void {
    this.signInService.signIn(this.signInData)
      .subscribe(response => {
        console.log(response); // Gérer la réponse du serveur ici
      });
  }
}