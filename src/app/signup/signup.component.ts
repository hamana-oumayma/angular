import { Component, OnInit } from '@angular/core';
import { SignUp } from '../models/signup';
import { SignupService } from '../services/SignUp.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {
  signUpData: SignUp = { nom: '', prenom: '', email: '', password: '' }; // Changer le nom de la propriété pour éviter la duplication

  constructor(private signUpService: SignupService) {}

  signUp() {
    this.signUpService.signUp(this.signUpData).subscribe(
      response => {
        console.log('User signed up successfully:', response);
        // Rediriger l'utilisateur vers une autre page, par exemple, après une inscription réussie
      },
      error => {
        console.error('Error during signup:', error);
        // Afficher un message d'erreur à l'utilisateur ou effectuer une autre action en cas d'erreur
      }
    );
  }
}