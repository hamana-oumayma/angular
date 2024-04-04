import { Component, OnInit } from '@angular/core';
import { radestg1 } from 'src/app/models/radestg1';
import { Radestg1Service } from 'src/app/services/radestg1.service';

@Component({
  selector: 'app-tg1',
  templateUrl: './tg1.component.html',
  styleUrls: ['./tg1.component.css']
})
export class TG1Component implements OnInit {

   
  radesstg1:  radestg1[] = [];
  constructor (private   radestg1Service:  Radestg1Service  ) { }

  ngOnInit(): void {
    this.getradesstg1();
   
  }
  getradesstg1(): void {
    this.radestg1Service.getVal().subscribe(  radesstg1 => {
      this.radesstg1=   radesstg1;
      console.log("Récuperation des données:",radesstg1);
    
  },
  error => {
    console.error("Erreur lors de la récupération des Données:", error);
  });
}
}
