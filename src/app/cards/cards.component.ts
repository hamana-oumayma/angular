import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  items=[
    { name: 'Rendement', value: 0 , icon: 'trending_up' },
    { name: 'Taux de Degradation', value: 0 , icon: 'eco' },
    { name: '', value: 0 , icon: 'cloud' },
    { name: 'Consommation du gaz', value: 0 , icon: 'local_gas_station' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
