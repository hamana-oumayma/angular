import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  signIn(form: any) {
    // Effectuez ici votre logique de connexion avec le backend
    // Par exemple, vous pouvez envoyer une requête HTTP POST pour vérifier les informations de connexion

    // Si la connexion réussit, vous pouvez rediriger l'utilisateur vers le tableau de bord
    this.router.navigate(['/dashboard']);
  }

}