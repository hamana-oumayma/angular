import { Component, OnInit } from '@angular/core';
import { soussetg2 } from 'src/app/models/soussetg2';
import { Soussetg2Service } from 'src/app/services/soussetg2.service';

@Component({
  selector: 'app-tg2',
  templateUrl: './tg2.component.html',
  styleUrls: ['./tg2.component.css']
})
export class TG2Component implements OnInit {
 
  soussestg2: soussetg2[] = [];
  constructor (private   soussetg2Service:  Soussetg2Service  ) { }

  ngOnInit(): void {
    this.getsoussestg2();
   
  }
  getsoussestg2(): void {
    this.soussetg2Service.getVal().subscribe(  soussestg2 => {
      this.soussestg2=  soussestg2;
      console.log("Récuperation des données:",soussestg2);
    
  },
  error => {
    console.error("Erreur lors de la récupération des Données:", error);
  });
}
}