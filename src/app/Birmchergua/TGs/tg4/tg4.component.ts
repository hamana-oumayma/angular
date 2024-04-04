import { Component, OnInit } from '@angular/core';
import { birmchergatg4 } from 'src/app/models/birmchergatg4';
import { Birmchergatg4Service } from 'src/app/services/birmchergatg4.service';

@Component({
  selector: 'app-tg4',
  templateUrl: './tg4.component.html',
  styleUrls: ['./tg4.component.css']
})
export class TG4Component implements OnInit {
 
  birmchergastg4:  birmchergatg4[] = [];
  constructor (private birmchergatg4Service:Birmchergatg4Service  ) { }

  ngOnInit(): void {
    this.getbirmchergastg4();
   
  }
  getbirmchergastg4(): void {
    this.birmchergatg4Service.getVal().subscribe( birmchergastg4 => {
      this. birmchergastg4 =  birmchergastg4;
      console.log("Récuperation des données:",birmchergastg4);
    
  },
  error => {
    console.error("Erreur lors de la récupération des Données:", error);
  });
}
}