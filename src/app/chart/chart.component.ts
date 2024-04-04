import { Component, Input , OnInit } from '@angular/core';
import {Chart , registerables} from 'chart.js/auto';
import * as moment from 'moment';
import 'chartjs-adapter-moment';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit{
 
  @Input() chartData: any;

  constructor() { }

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart(): void {
    Chart.register(...registerables);
    const chartElement = document.getElementById('lineChart') as HTMLCanvasElement;
    if (chartElement) {
      const ctx = chartElement.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: this.chartData,
          options: {
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Valeur'
                }
              },
              x: {
                title: {
                  display: true,
                  text: 'Date'
                },
                type: 'time',
                time: {
                  parser: (value: any) => {
                    // Utilisation de Moment.js pour parser la date
                    const date = moment.utc(value);
                    return date.isValid() ? date.valueOf() : value;
                  },
                  tooltipFormat: 'll HH:mm',
                  unit: 'day',
                  displayFormats: {
                    day: 'YYYY-MM-DD HH:mm'
                  }
                }
              }
            },
            plugins: { // Déplacer les plugins au niveau des options du graphique
              legend: {
                display: true,
                position: 'bottom'
              },
              title: {
                display: true,
                text: 'Mon Graphique'
              }
            }
          }
        });
      }
    }
  }
}