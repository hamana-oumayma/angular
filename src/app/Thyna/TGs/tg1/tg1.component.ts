import { Component, OnInit } from '@angular/core';
import { thynatg1 } from 'src/app/models/thynatg1';
import { Thynatg1Service } from 'src/app/services/thynatg1.service';

@Component({
  selector: 'app-tg1',
  templateUrl: './tg1.component.html',
  styleUrls: ['./tg1.component.css']
})
export class TG1Component implements OnInit {
 
  thynastg1: thynatg1[] = [];
  constructor (private   thynatg1Service:  Thynatg1Service  ) { }

  ngOnInit(): void {
    this.getthynastg1();
   
  }
  getthynastg1(): void {
    this.thynatg1Service.getVal().subscribe( thynastg1 => {
      this.thynastg1=  thynastg1;
      console.log("Récuperation des données:",thynastg1);
    
  },
  error => {
    console.error("Erreur lors de la récupération des Données:", error);
  });
}
}