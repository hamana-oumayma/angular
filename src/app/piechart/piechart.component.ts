import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Chart, ChartOptions } from 'chart.js';
@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {
  @ViewChild('pieChart') pieChartElement!: ElementRef;
  private chart!: Chart;

  constructor() { 
    
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    if (!this.pieChartElement) {
      return;
    }

    const ctx = this.pieChartElement.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Completed' , 'InProgress' , 'Behind'],
        datasets: [{
          data: [76 , 24 , 10],
          backgroundColor: [
            '#5c6bc0',
            ' #0c5460',
            '#721c24',
          ],
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          tooltip: {
            enabled: true,
            callbacks: {
              label: function(context) {
                const label = context.label || '';
                if (label) {
                  return `${label}: ${context.formattedValue}%`;
                }
                return null;
              }
            }
          },
          legend: {
            display: false
          }
        },
        title: {
          display: true,
          text: 'Tasks Performance %'
        }
      } as ChartOptions
    });
  }
}
