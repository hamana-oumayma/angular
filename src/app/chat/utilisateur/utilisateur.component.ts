import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  utilisateurs: Utilisateur[]=[];
  utilisateurSelectionne: Utilisateur | null = null; ;

  constructor(private utilisateurService: UtilisateurService) {}

  ngOnInit(): void {
    this.loadUtilisateurs();
  }

  loadUtilisateurs(): void {
    this.utilisateurService.getAllUsers().subscribe(utilisateurs => {
      this.utilisateurs = utilisateurs;
    });
  }

  selectUtilisateur(utilisateur: Utilisateur): void {
    this.utilisateurSelectionne = utilisateur;
  }
}