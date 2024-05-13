import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/SignUp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  message: string = '';

  constructor(private signupService: SignupService, private router: Router) { } // Injectez le service Router

  login(): void {
    this.signupService.login(this.email, this.password)
      .subscribe(
        response => {
          console.log(response);
          if (response.emailExist && response.passwordExist) {
            this.signupService.updateLoginStatus(true); // Met à jour l'état de connexion
            this.message = 'Connexion réussie!';
            this.router.navigate(['/dashboard']); // Redirige vers le tableau de bord après connexion réussie
          } else {
            this.message = 'Email ou mot de passe incorrect.';
          }
        },
        error => {
          console.log(error);
          this.message = 'Erreur lors de la connexion.';
        }
      );
  }
}