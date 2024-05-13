import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm, UntypedFormGroup, FormControl, Validators, UntypedFormBuilder, FormBuilder, FormGroup } from '@angular/forms';
import {  SignUp} from 'src/app/models/signup';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/SignUp.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
 
  user: SignUp = {
    nom: '',
    prenom: '',
    email: '',
    password: '',
    adresse: ''
  };
  message: string = '';

  constructor(private signupService: SignupService) { }

  register(): void {
    this.signupService.register(this.user)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'Inscription réussie!';
        },
        error => {
          console.log(error);
          this.message = 'Erreur lors de l\'inscription.';
        }
      );
  }

}