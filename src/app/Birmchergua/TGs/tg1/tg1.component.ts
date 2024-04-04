import { Component, OnInit } from '@angular/core';
import { birmchergatg1 } from 'src/app/models/birmchergatg1';
import { Birmchergatg1Service } from 'src/app/services/birmchergatg1.service';
import { JsonUtilsService } from 'src/app/services/json-utils.service';
@Component({
  selector: 'app-tg1',
  templateUrl: './tg1.component.html',
  styleUrls: ['./tg1.component.css']
})
export class TG1Component implements OnInit {
  birmchergatg1Data: birmchergatg1[] = []; // Variable pour stocker les données récupérées

  constructor(private birmchergatg1Service: Birmchergatg1Service) { } // Injection du service Birmchergatg1Service

  ngOnInit(): void {
    this.getBirmchergatg1Data(); // Appel de la méthode pour récupérer les données lors de l'initialisation du composant
  }

  // Méthode pour récupérer les données
  getBirmchergatg1Data(): void {
    this.birmchergatg1Service.getVal().subscribe(
      data => {
        this.birmchergatg1Data = data; // Stockez les données récupérées dans la variable
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération des données :', error);
      }
    );
  }
}