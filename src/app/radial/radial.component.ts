import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartOptions } from 'chart.js';


@Component({
  selector: 'app-radial',
  templateUrl: './radial.component.html',
  styleUrls: ['./radial.component.css']
})
export class RadialComponent implements OnInit {
  @ViewChild('myChart') myChart!: ElementRef;
  router: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.createChart();
  }
  

  createChart() {
    const ctx = this.myChart.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fév', 'Mars', 'Avril', 'Mai'], // Replace with your dates
        datasets: [
          {
            label: 'Rades',
            data: [29.4 , 28.5, 31.1, 29.6 , 35.4, 32.2,31, 28.8, 35, 34], // Replace with Rades data
            borderColor: '#4fcf89',
            fill: false,
            backgroundColor: '#4fcf89'
            
          },
          {
            label: 'BirMchergua',
            data: [30.2, 29, 31.6, 27.7, 35.1, 34, 33,30.2,29.5], // Replace with Bir Mchergua data
            borderColor: 'green',
            fill: false,
            backgroundColor:'green'
          },
          {
            label: 'Goulette',
            data: [27, 34, 33.5,30,29, 33,28, 31, 29, 34.2], // Example data for Dataset 3
            borderColor: '#5ba4e7',
            fill: false,
            backgroundColor: '#5ba4e7'
          },
          {
            label: 'Sousse',
            data: [28.7, 31, 29.5, 34.5,28, 31, 29, 34.3,28, 31, 29, 32.5,28, 31, 29, 33.9],// Example data for Dataset 4
            borderColor: '#5c6bc0',
            fill: false,
            backgroundColor:  '#5c6bc0'
          },
          {
            label: 'Thyna',
            data: [29.9, 31.2, 29, 28, 31, 29.7, 35,28, 31.6, 29, 35,28, 31, 29, 32], // Example data for Dataset 5
            borderColor: 'purple',
            fill: false,
            backgroundColor:'purple'
          },
          {
            label: 'Feriana',
            data: [31, 28, 31.2, 29, 35,28.1, 31, 29, 32,28, 31, 29, 35,28, 31.9, 29.2, 33.9], // Example data for Dataset 6
            borderColor: ' #1b238b',
            fill: false,
            backgroundColor: ' #1b238b'
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            position: 'bottom'
          },
          tooltip: {
            position: 'average',
            mode: 'index',
            intersect: false
          },
          title: {
            display: false
          }
        },
        scales: {
          x: {
            position: 'bottom'
          },
          y: {
            ticks: {
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              labelString: 'Rendement'
            }
          }
        }
      } as unknown as ChartOptions
    });
  }
  redirectToRadestg1(): void {
    this.router.navigate(['Rades/tg1']); // Redirige vers le composant Radestg1
  }
}