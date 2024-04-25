import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  items=[
    { name: 'Rendement'  , icon: 'trending_up' },
    { name: 'Taux de Degradation' , icon: 'eco' },
    { name: 'Consommation Specifique', icon: 'bolt' },
    { name: 'Consommation du gaz' , icon: 'whatshot' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
