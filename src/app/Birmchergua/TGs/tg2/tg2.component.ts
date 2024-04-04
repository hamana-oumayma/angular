import { Component, OnInit } from '@angular/core';
import { birmchergatg2 } from 'src/app/models/birmchergatg2';
import { Birmchergatg2Service } from 'src/app/services/birmchergatg2.service';

@Component({
  selector: 'app-tg2',
  templateUrl: './tg2.component.html',
  styleUrls: ['./tg2.component.css']
})
export class TG2Component implements OnInit {


  birmchergastg2:  birmchergatg2[] = [];
  constructor (private birmchergatg2Service:Birmchergatg2Service  ) { }

  ngOnInit(): void {
    this.getbirmchergastg2();
   
  }
  getbirmchergastg2(): void {
    this.birmchergatg2Service.getVal().subscribe( birmchergastg2 => {
      this. birmchergastg2 =  birmchergastg2;
      console.log("Récuperation des données:",birmchergastg2);
    
  },
  error => {
    console.error("Erreur lors de la récupération des Données:", error);
  });
}
}
