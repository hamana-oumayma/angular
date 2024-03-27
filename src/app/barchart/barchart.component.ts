import { Component, OnInit, ElementRef , ViewChild } from '@angular/core';
import Chart  from 'chart.js/auto';
import {ChartDataset ,Scriptable} from 'chart.js/auto'
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent  {
  @ViewChild('chart') private chartRef!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  currentYear: number;
  yearDataMap: { [year: number]: { labels: string[]; datasets: ChartDataset[] } } = {
    2022: {
      labels: ["Rades", "Goulette", "BirMchergua", "Sousse", "Bouchemma", "Feriana", "Thyna"],
      datasets: [
        {
          backgroundColor: '#5c6bc0',
          borderColor: '#D32F2F',
          data: [7, 1, 15, 15, 0, 5.1, 1],
          label: 'TG1'
        },
        {
          backgroundColor: '#5ba4e7',
          borderColor: 'rgba(255, 99, 132)',
          data: [20, 0, 15, 3, 0, 8.1, 0],
          label: 'TG2'
        },
        {
          backgroundColor: '#299b82',
          borderColor: 'rgba(255, 99, 132)',
          data: [0, 0, 15, 0, 4, 0, 5],
          label: 'TG3'
        },
        {
          backgroundColor: '#4fcf89',
          borderColor: 'rgba(255, 99, 132)',
          data: [0, 0, 15, 0, 2, 0, 0],
          label: 'TG4'
        },
        {
          backgroundColor: '#5c6bc0',
          borderColor: 'rgba(255, 99, 132)',
          data: [0, 0, 0, 0, 2, 0, 0],
          label: 'TG5'
        }
      ]
    },
    2023: {
      labels: ["Rades", "Goulette", "BirMchergua", "Sousse", "Bouchemma", "Feriana", "Thyna"],
      datasets: [
        {
          backgroundColor: '#5c6bc0',
          borderColor: '#D32F2F',
          data: [12.5, 0, 0, 15, 0, 3, 5],
          label: 'TG1'
        },
        {
          backgroundColor: '#5ba4e7',
          borderColor: 'rgba(255, 99, 132)',
          data: [12.5, 0, 0, 0, 0, 5, 5],
          label: 'TG2'
        },
        {
          backgroundColor: '#299b82',
          borderColor: 'rgba(255, 99, 132)',
          data: [0, 0, 0, 0, 4, 0, 5],
          label: 'TG3'
        },
        {
          backgroundColor: '#4fcf89',
          borderColor: 'rgba(255, 99, 132)',
          data: [0, 0, 0, 0, 4, 0, 0],
          label: 'TG4'
        },
        {
          backgroundColor: '#5c6bc0',
          borderColor: 'rgba(255, 99, 132)',
          data: [0, 0, 0, 0, 4, 0, 0],
          label: 'TG5'
        }
      ]
    },
    2024: {
      labels: ["Rades", "Goulette", "BirMchergua", "Sousse", "Bouchemma", "Feriana", "Thyna"],
      datasets: [
        {
          backgroundColor: '#5c6bc0',
          borderColor: '#D32F2F',
          data: [12.5, 1, 0, 10, 0, 4, 4],
          label: 'TG1'
        },
        {
          backgroundColor: '#5ba4e7',
          borderColor: 'rgba(255, 99, 132)',
          data: [10, 0, 1, 6, 0, 5.1, 1],
          label: 'TG2'
        },
        {
          backgroundColor: '#299b82',
          borderColor: 'rgba(255, 99, 132)',
          data: [0, 0, 0, 0, 60, 0, 2],
          label: 'TG3'
        },
        {
          backgroundColor: '#4fcf89',
          borderColor: 'rgba(255, 99, 132)',
          data: [0, 0, 1, 0, 0, 0, 0],
          label: 'TG4'
        },
        {
          backgroundColor: '#5c6bc0',
          borderColor: 'rgba(255, 99, 132)',
          data: [0, 0, 0, 0, 0, 0, 0],
          label: 'TG5'
        }
      ]
    }
  };

  constructor() {
    this.currentYear = 2022; // Année par défaut
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.createChart();
    }, 100); // Délai en millisecondes, ajustez selon vos besoins
  }

  createChart(): void {
    // Assurez-vous que chartRef est défini avant d'y accéder
    if (this.chartRef && this.chartRef.nativeElement) {
      this.chart = new Chart(this.chartRef.nativeElement, {
        type: 'bar',
        data: {
          labels: this.yearDataMap[this.currentYear].labels,
          datasets: this.yearDataMap[this.currentYear].datasets
        },
        options: {
          scales: {
            y: {
              beginAtZero: true // Démarre l'axe des ordonnées à zéro
            }
          },
          plugins: {
            legend: {
              display: false // Désactiver l'affichage de la légende
            }
          }
        }
      });
    } else {
      console.error('chartRef is not defined or its native element is undefined!');
    }
  }
  
  selectYear(year: number): void {
    this.currentYear = year;
    if (this.chart) {
      this.chart.data.labels = this.yearDataMap[year].labels;
      this.chart.data.datasets = this.yearDataMap[year].datasets;
      this.chart.update();
    } else {
      console.error('Chart is not initialized!');
    }
  }
}