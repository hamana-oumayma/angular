import { Component, OnInit } from '@angular/core';
import { soussetg1 } from 'src/app/models/soussetg1';
import { Soussetg1Service } from 'src/app/services/soussetg1.service';

@Component({
  selector: 'app-tg1',
  templateUrl: './tg1.component.html',
  styleUrls: ['./tg1.component.css']
})
export class TG1Component implements OnInit {
 
 soussestg1: soussetg1[] = [];
  constructor (private   soussetg1Service:  Soussetg1Service  ) { }

  ngOnInit(): void {
    this.getsoussestg1();
   
  }
  getsoussestg1(): void {
    this.soussetg1Service.getVal().subscribe(  soussestg1 => {
      this.soussestg1=  soussestg1;
      console.log("Récuperation des données:",soussestg1);
    
  },
  error => {
    console.error("Erreur lors de la récupération des Données:", error);
  });
}
}