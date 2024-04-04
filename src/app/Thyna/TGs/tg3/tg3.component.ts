import { Component, OnInit } from '@angular/core';
import { thynatg3 } from 'src/app/models/thynatg3';
import { Thynatg3Service } from 'src/app/services/thynatg3.service';

@Component({
  selector: 'app-tg3',
  templateUrl: './tg3.component.html',
  styleUrls: ['./tg3.component.css']
})
export class TG3Component implements OnInit {

  thynastg3: thynatg3[] = [];
  constructor (private   thynatg3Service:  Thynatg3Service  ) { }

  ngOnInit(): void {
    this.getthynastg3();
   
  }
  getthynastg3(): void {
    this.thynatg3Service.getVal().subscribe( thynastg3 => {
      this.thynastg3=  thynastg3;
      console.log("Récuperation des données:",thynastg3);
    
  },
  error => {
    console.error("Erreur lors de la récupération des Données:", error);
  });
}
}