import { Component, OnInit } from '@angular/core';
import { ferianatg1 } from 'src/app/models/ferianatg1';
import { Ferianatg1Service } from 'src/app/services/ferianatg1.service';
@Component({
  selector: 'app-tg1',
  templateUrl: './tg1.component.html',
  styleUrls: ['./tg1.component.css']
})
export class TG1Component implements OnInit {

  ferianastg1:  ferianatg1[] = [];
  constructor (private ferianatg1Service:Ferianatg1Service  ) { }

  ngOnInit(): void {
    this.getferianastg1();
   
  }
  getferianastg1(): void {
    this.ferianatg1Service.getVal().subscribe( ferianastg1 => {
      this.ferianastg1=  ferianastg1;
      console.log("Récuperation des données:",ferianastg1);
    
  },
  error => {
    console.error("Erreur lors de la récupération des Données:", error);
  });
}
}