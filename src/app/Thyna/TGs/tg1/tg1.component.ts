import { Component, OnInit } from '@angular/core';
import { thynatg1 } from 'src/app/models/thynatg1';
import { Thynatg1Service } from 'src/app/services/thynatg1.service';
import { Chart , ChartOptions  } from 'chart.js/auto';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tg1',
  templateUrl: './tg1.component.html',
  styleUrls: ['./tg1.component.css']
})
export class TG1Component implements OnInit {
  thynatg1: thynatg1[] = [];
degradationChart: any;
gasConsumptionChart: any;
defconsoChart: any;
rendementChart: any;

constructor(private thynatg1Service: Thynatg1Service, private http: HttpClient) { }

ngOnInit(): void {
  this.getThynatg1();
}
showAlert() {
  alert(`
    Alerte !
    Taux de Dégradation dépasse la valeur maximale de 4,
    Consommation spécifique dépasse la valeur seuil de 7,
    Consommation de gaz dépasse la valeur seuil de 260
  `);
}

getThynatg1(): void {
  this.thynatg1Service.getVal().subscribe(thynatg1 => {
    // Assigning data without filtering
    this.thynatg1 = thynatg1.map(data => ({
      ...data,
      Date_Thynatg1: data.Date_thynatg1 ? new Date(data.Date_thynatg1) : undefined
    }));
    console.log("Récuperation des données:", this.thynatg1);

    // Preparing data for the charts
    const labels = this.thynatg1
      .filter(data => !!data.Date_thynatg1) // Filter objects where Date_Thynatg1 is defined
      .map(data => this.formatDate(data.Date_thynatg1!)); // Use ! to indicate that Date_Thynatg1 cannot be undefined
    const degradationData = this.thynatg1
      .filter(data => !!data.Date_thynatg1) // Filter objects where Date_Thynatg1 is defined
      .map(data => data.Tauxdegradation_thynatg1);
    const gasConsumptionData = this.thynatg1
      .filter(data => !!data.Date_thynatg1) // Filter objects where Date_Thynatg1 is defined
      .map(data => data.consogaz_thynatg1);
    const defconsoData = this.thynatg1
      .filter(data => !!data.Date_thynatg1) // Filter objects where Date_Thynatg1 is defined
      .map(data => data.defconso_thynatg1);
    const rendementData = this.thynatg1
      .filter(data => !!data.Date_thynatg1) // Filter objects where Date_Thynatg1 is defined
      .map(data => data.rendement_thynatg1);
      const constantLineData = Array(degradationData.length).fill(4);
      const constantGasConsumptionData = Array(gasConsumptionData.length).fill(260);
     const constantDefconsoData = Array(defconsoData.length).fill(7);
     const constantRendementData = Array(rendementData.length).fill(28);
 // Creating the degradation chart
 this.degradationChart = new Chart('degradation-canvas', {
  type: 'line',
  data: {
    labels: labels,
    datasets: [
      {
        label: 'Taux de dégradation',
        data: degradationData,
        borderColor: '#6663ff',
        borderWidth: 1,
        pointRadius: 0,
        pointBackgroundColor: '#6663ff',
        pointBorderColor: '#6663ff',
        pointBorderWidth: 2,
        fill: false,
        backgroundColor: '#6663ff' // Rouge plus clair
      },
      {
        label: 'Seuil d`alerte',
        data: Array(degradationData.length).fill(4),
        borderColor: '#ff0000',
        borderWidth: 1,
        pointRadius: 0,
        fill: false,
        backgroundColor: '#ff0000',
      }
    ]
  },
  options: {
    legend: {
      display: true,
      position: 'bottom'
    },
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          unit: 'day'
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        },
        scaleLabel: {
          display: true,
          labelString: 'Taux de dégradation'
        }
      }]
    }
  } as unknown as ChartOptions
});

this.degradationChart.data.datasets.push({
  label: 'maximum y=4 ',
  data: constantLineData,
  borderColor: '#ff0000', // Choisissez une couleur rouge pour la constante
  borderWidth: 1,
  pointRadius: 0, // Pour supprimer les points sur la ligne
  fill: false,
  backgroundColor: '#ff0000',
});



// Creating the gas consumption chart
this.gasConsumptionChart = new Chart('gas-consumption-canvas', {
type: 'line',
data: {
labels: labels,
datasets: [
  {
    label: 'Consommation de gaz',
    data: gasConsumptionData,
    borderColor: '#5ba4e7',
    borderWidth: 1,
    pointRadius: 0,
    pointBackgroundColor: '#5ba4e7',
    pointBorderColor: '#5ba4e7',
    pointBorderWidth: 2,
    fill: false,
    backgroundColor: '#5ba4e7'
  },
  {
    label: 'Seuil d`alerte',
    data: Array(gasConsumptionData.length).fill(260), // Remplacer 288 par la valeur maximale souhaitée
    borderColor: '#ff0000',
    borderWidth: 1,
    pointRadius: 0,
    fill: false,
    backgroundColor: '#ff0000'
  }
]

},
options: {
legend: {
  display: true,
  position: 'bottom' // Position the legend at the bottom
},
scales: {
  xAxes: [{
    type: 'time',
    time: {
      unit: 'day'
    }
  }],
  yAxes: [{
    ticks: {
      beginAtZero: false
    },
    scaleLabel: {
      display: true,
      labelString: 'Consommation de gaz'
    }
  }]
}
} as unknown as ChartOptions
});
this.gasConsumptionChart.data.datasets.push({
label: 'maximum y=260', // Label for the legend
data: constantGasConsumptionData, // Constant line data
borderColor: '#ff0000', // Red color for the line
borderWidth: 1,
pointRadius: 0, // Hide points on the line
fill: false,
backgroundColor: '#ff0000',
});

// Creating the defconso chart
this.defconsoChart = new Chart('defconso-canvas', {
type: 'line',
data: {
labels: labels,
datasets: [
  {
    label: 'Consommation spécifique',
    data: defconsoData,
    borderColor: '#299b82',
    borderWidth: 1,
    pointRadius: 0,
    pointBackgroundColor: '#299b82',
    pointBorderColor: '#299b82',
    pointBorderWidth: 2,
    fill: false,
    backgroundColor: '#299b82'
  },
  {
    label: 'Seuil d`alerte',
    data: Array(defconsoData.length).fill(7), // Remplacer 10 par la valeur maximale souhaitée
    borderColor: '#ff0000',
    borderWidth: 1,
    pointRadius: 0,
    fill: false,
    backgroundColor: '#ff0000'
  }
]
},
options: {
legend: {
  display: true,
  position: 'bottom' // Position the legend at the bottom
},
scales: {
  xAxes: [{
    type: 'time',
    time: {
      unit: 'day'
    }
  }],
  yAxes: [{
    ticks: {
      beginAtZero: true
    },
    scaleLabel: {
      display: true,
      labelString: 'Defconso'
    }
  }]
}
} as unknown as ChartOptions
});
this.defconsoChart.data.datasets.push({
label: 'maximum y=7', // Label for the legend
data: constantDefconsoData, // Constant line data
borderColor: '#ff0000', // Red color for the line
borderWidth: 1,
pointRadius: 0, // Hide points on the line
fill: false,
backgroundColor: '#ff0000',
});

// Creating the rendement chart
this.rendementChart = new Chart('rendement-canvas', {
type: 'line',
data: {
labels: labels,
datasets: [
  {
    label: 'Rendement',
    data: rendementData,
    borderColor: '#ffadbc',
    borderWidth: 1,
    pointRadius: 0,
    pointBackgroundColor: '#ffadbc',
    pointBorderColor: '#ffadbc',
    pointBorderWidth: 2,
    fill: false,
    backgroundColor: '#ffadbc'
  },
  {
    label: 'minimum (28%)',
    data: Array(rendementData.length).fill(28), // Remplacer 28 par la valeur maximale souhaitée
    borderColor: '#299b82',
    borderWidth: 1,
    pointRadius: 0,
    fill: false,
    backgroundColor: '#299b82'
  }
]
},
options: {
legend: {
  display: true,
  position: 'bottom' ,
  labels: {
    fontColor: '#ffadbc' // Baby pink
  }
},
scales: {
  xAxes: [{
    type: 'time',
    time: {
      unit: 'day'
    }
  }],
  yAxes: [{
    ticks: {
      beginAtZero: true
    },
    scaleLabel: {
      display: true,
      labelString: 'Rendement'
    }
  }]
}
} as unknown as ChartOptions
});
this.rendementChart.data.datasets.push({
label: 'minimum y=28', // Label for the legend
data: constantRendementData, // Constant line data
borderColor: '#299b82', // Red color for the line
borderWidth: 1,
pointRadius: 0, // Hide points on the line
fill: false,
backgroundColor: '#299b82',
});
});

}


formatDate(date: Date | undefined): string {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return ''; // or any other default value you prefer
  }

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return date.toLocaleDateString('fr-FR', options);
}

downloadExcel(): void {
this.http.get('http://localhost:8000/export/excel', { responseType: 'arraybuffer' })
.subscribe((data: any) => {
  const blob = new Blob([data], { type: 'application/vnd.ms-excel' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'thynatg1_export.xls';
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
});
}

private downloadFile(data: any, filename: string, type: string): void {
const blob = new Blob([data], { type: type });
const url = window.URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = filename;
document.body.appendChild(a);
a.click();
window.URL.revokeObjectURL(url);
}
}
