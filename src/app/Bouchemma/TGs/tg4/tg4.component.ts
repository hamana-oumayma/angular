import { Component, OnInit } from '@angular/core';
import { bouchematg4 } from 'src/app/models/bouchemmatg4';
import { Bouchematg4Service } from 'src/app/services/bouchematg4.service';
@Component({
  selector: 'app-tg4',
  templateUrl: './tg4.component.html',
  styleUrls: ['./tg4.component.css']
})
export class TG4Component implements OnInit {

  bouchemastg4:  bouchematg4[] = [];
  constructor (private Bouchematg4Service:Bouchematg4Service  ) { }

  ngOnInit(): void {
    this.getbouchemastg4();
   
  }
  getbouchemastg4(): void {
    this.Bouchematg4Service.getVal().subscribe( bouchemastg4 => {
      this. bouchemastg4 =  bouchemastg4;
      console.log("Récuperation des données:",bouchemastg4);
    
  },
  error => {
    console.error("Erreur lors de la récupération des Données:", error);
  });
}
}