import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { birmchergatg1 } from 'src/app/models/birmchergatg1';
import { Birmchergatg1Service } from 'src/app/services/birmchergatg1.service';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit  {
  @Input() modalVisible: boolean = false; // Input pour recevoir la valeur de modalVisible depuis le composant parent
  birmchergastg1: birmchergatg1[] = [];
  message: string = '';

  constructor(public birmchergatg1Service: Birmchergatg1Service) { }
  
  ngOnInit(): void {
    this.getbirmchergatg1();
  }
  
  getbirmchergatg1(): void {
    this.birmchergatg1Service.getVal().subscribe(birmchergastg1 => {
      this.birmchergastg1 = birmchergastg1.map(data => ({
        ...data,
        Date_Birmchergatg1: data.Date_Birmchergatg1 ? new Date(data.Date_Birmchergatg1) : undefined
      }));

      // Comparing values with thresholds
      this.birmchergastg1.forEach(data => {
        if (data.Tauxdegradation_Birmchergatg1 && data.Tauxdegradation_Birmchergatg1 > 4) {
          this.message += `Alert! Taux de dégradation dépassant 4 pour l'ID ${data.id}\n`;
        }
        if (data.consogaz_Birmchergatg1 && data.consogaz_Birmchergatg1 > 288) {
          this.message += `Alert! Consommation de gaz dépassant 288 pour l'ID ${data.id}\n`;
        }
        if (data.defconso_Birmchergatg1 && data.defconso_Birmchergatg1 > 10) {
          this.message += `Alert! Defconso dépassant 10 pour l'ID ${data.id}\n`;
        }
        if (data.rendement_Birmchergatg1 && data.rendement_Birmchergatg1 < 28) {
          this.message += `Alert! Rendement inférieur à 28 pour l'ID ${data.id}\n`;
        }
      });

      if (this.message) {
        // Afficher la modal avec le message
        this.birmchergatg1Service.showAlertModal(this.message);
      }
    });
  }

 
  clearAlert(): void {
    this.birmchergatg1Service.clearAlert();
  }
}