import { Component, OnInit,AfterViewInit, ViewChild,ElementRef  } from '@angular/core';
import {Chart} from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit {

 
  @ViewChild('lineArea4Chart') private chartRef!: ElementRef;
  private chart!: Chart;

  constructor() { }

  ngAfterViewInit() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: ['1', '2', '3', '3', '4', '5', '6'],
        datasets: [{
          label: 'My Dataset',
          data: [65, 59, 80, 81, 56, 55, 40], // Exemple de données
          fill: true,
          borderColor: ' #5c6bc0',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true, // Démarre l'axe des ordonnées à zéro
            title: {
              display: true,
              text: 'Valeur' // Titre de l'axe des ordonnées
            }
          },
          x: {
            title: {
              display: true,
              text: 'Mois' // Titre de l'axe des abscisses
            }
          }
        },
        plugins: {
          legend: {
            display: true, // Afficher la légende
            position: 'bottom' // Position de la légende (top, bottom, left, right)
          },
          title: {
            display: true,
            text: 'Mon Graphique' // Titre du graphique
          }
        }
      }
    });
  }
}