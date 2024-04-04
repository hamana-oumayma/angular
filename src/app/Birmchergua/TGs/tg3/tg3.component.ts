import { Component, OnInit } from '@angular/core';
import { birmchergatg3 } from 'src/app/models/birmchergatg3';
import { Birmchergatg3Service } from 'src/app/services/birmchergatg3.service';

@Component({
  selector: 'app-tg3',
  templateUrl: './tg3.component.html',
  styleUrls: ['./tg3.component.css']
})
export class TG3Component implements OnInit {

  birmchergastg3: birmchergatg3[] = [];
  chartData: any;

  constructor(private birmchergatg3Service: Birmchergatg3Service) { }

  ngOnInit(): void {
    this.retrieveBirmchergastg3();
  }

  retrieveBirmchergastg3(): void {
    this.birmchergatg3Service.getVal().subscribe(
      (data: birmchergatg3[]) => {
        this.birmchergastg3 = data;
        this.chartData = {
          labels: this.birmchergastg3.map(item => item.Date_Birmchergatg3),
          datasets: [
            {
              label: 'Taux de dégradation',
              data: this.birmchergastg3.map(item => item.Tauxdegradation_Birmchergatg3)
            },
            {
              label: 'Défaut de consommation',
              data: this.birmchergastg3.map(item => item.defconso_Birmchergatg3)
            },
            {
              label: 'Rendement',
              data: this.birmchergastg3.map(item => item.rendement_Birmchergatg3)
            },
            {
              label: 'Consommation de gaz',
              data: this.birmchergastg3.map(item => item.consogaz_Birmchergatg3)
            }
          ]
        };
        console.log("Données récupérées avec succès :", data);
      },
      error => {
        console.error("Erreur lors de la récupération des données :", error);
      }
    );
  }
}