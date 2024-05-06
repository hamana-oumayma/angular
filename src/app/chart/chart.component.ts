import { AfterViewInit, Component, ElementRef, Input , OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {Chart , registerables} from 'chart.js/auto';




@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('lineArea4Chart') private chartRef!: ElementRef;
  private chart!: Chart;

  constructor(private router: Router) { }

  ngAfterViewInit() {
    const ctx = this.chartRef.nativeElement.getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(92, 107, 192, 0.5)'); // Début du dégradé
    gradient.addColorStop(1, 'rgba(91, 164, 231, 0.5)'); // Fin du dégradé


    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'scatter', // Modifié le type de graphique en 'scatter'
      data: {
        datasets: [{
          label: 'My Dataset',
          data: [
            { x: 0, y: 6.535 }, { x: 1, y: 6.348 }, { x: 2, y: 5.618 }, { x: 3, y: 5.845 }, { x: 4, y: 6.426 }, 
            { x: 5, y: 6.228 }, { x: 6, y: 5.967 }, { x: 7, y: 6.558 }, { x: 8, y: 6.54 }, { x: 9, y: 6.227 },
            { x: 10, y: 5.937 }, { x: 11, y: 5.867 }, { x: 12, y: 5.59 }, { x: 13, y: 5.817 }, { x: 14, y: 6.332 },
            { x: 15, y: 6.543 }, { x: 16, y: 6.212 }, { x: 17, y: 6.192 }, { x: 18, y: 6.116 }, { x: 19, y: 5.506 },
            { x: 20, y: 5.387 }, { x: 21, y: 5.455 }, { x: 22, y: 5.355 }, { x: 23, y: 5.277 }, { x: 24, y: 5.232 },
            { x: 25, y: 5.201 }, { x: 26, y: 5.178 }, { x: 27, y: 5.223 }, { x: 28, y: 5.293 }, { x: 29, y: 5.323 },
            { x: 30, y: 5.287 }, { x: 31, y: 5.288 }, { x: 32, y: 5.305 }, { x: 33, y: 5.302 }, { x: 34, y: 5.312 },
            { x: 35, y: 5.445 }, { x: 36, y: 5.426 }, { x: 37, y: 5.4 }, { x: 38, y: 5.352 }, { x: 39, y: 5.459 },
            { x: 40, y: 6.107 }, { x: 41, y: 6.724 }, { x: 42, y: 6.596 }, { x: 43, y: 6.622 }, { x: 44, y: 6.863 },
            { x: 45, y: 6.026 }, { x: 46, y: 5.477 },{ x: 47, y: 5.287 }, { x: 48, y: 5.288 }, { x: 49, y: 6.543 }, { x: 50, y: 6.212 }, 
            { x: 51, y: 6.192 }, { x: 52, y: 6.116 },{ x: 53, y: 5.387 }, { x: 54, y: 5.455 },{ x: 55, y: 5.287 }, { x: 56, y: 5.288 },{ x: 57, y: 5.2 }
          ],
          pointBackgroundColor: 'white', // Couleur de remplissage des points
          pointBorderColor: ' #5c6bc0', // Couleur de la bordure des points
          pointRadius: 0,
          pointStyle: 'circle',
          showLine: true,
          fill: true,
          tension: 0.1,
          borderColor: ' #1b238b',
          borderWidth: 2,
          backgroundColor: 'rgba(92, 107, 192, 0.5)',
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
            title: {
              display: true,
              text: 'Valeur'
            }
          },
          x: {
            display: false
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'bottom'
          },
          title: {
            display: true,
            text: 'Centrale Rades',
            color: '#5c6bc0',
            font: {
              size: 18,
             // Augmenter la taille du titre
            }
          }
        }
      }
    });
  }
  redirectToRadestg1(): void {
    this.router.navigate(['Rades/tg1']); // Redirige vers le composant Radestg1
  }
}