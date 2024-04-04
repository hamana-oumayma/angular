import { Component, OnInit } from '@angular/core';
import { thynatg2 } from 'src/app/models/thynatg2';
import { Thynatg2Service } from 'src/app/services/thynatg2.service';

@Component({
  selector: 'app-tg2',
  templateUrl: './tg2.component.html',
  styleUrls: ['./tg2.component.css']
})
export class TG2Component implements OnInit {


  thynastg2: thynatg2[] = [];
  constructor (private   thynatg2Service:  Thynatg2Service  ) { }

  ngOnInit(): void {
    this.getthynastg2();
   
  }
  getthynastg2(): void {
    this.thynatg2Service.getVal().subscribe( thynastg2 => {
      this.thynastg2=  thynastg2;
      console.log("Récuperation des données:",thynastg2);
    
  },
  error => {
    console.error("Erreur lors de la récupération des Données:", error);
  });
}
}