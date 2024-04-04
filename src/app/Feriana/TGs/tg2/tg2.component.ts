import { Component, OnInit } from '@angular/core';
import { ferianatg2 } from 'src/app/models/ferianatg2';
import { Ferianatg2Service } from 'src/app/services/ferianatg2.service';

@Component({
  selector: 'app-tg2',
  templateUrl: './tg2.component.html',
  styleUrls: ['./tg2.component.css']
})
export class TG2Component implements OnInit {

 
  ferianastg2:  ferianatg2[] = [];
  constructor (private ferianatg2Service:Ferianatg2Service  ) { }

  ngOnInit(): void {
    this.getferianastg2();
   
  }
  getferianastg2(): void {
    this.ferianatg2Service.getVal().subscribe( ferianastg2 => {
      this.ferianastg2=  ferianastg2;
      console.log("Récuperation des données:",ferianastg2);
    
  },
  error => {
    console.error("Erreur lors de la récupération des Données:", error);
  });
}
}