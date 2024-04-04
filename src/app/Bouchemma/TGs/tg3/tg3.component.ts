import { Component, OnInit } from '@angular/core';
import { bouchematg3 } from 'src/app/models/bouchemmatg3';
import { Bouchematg3Service } from 'src/app/services/bouchematg3.service';
@Component({
  selector: 'app-tg3',
  templateUrl: './tg3.component.html',
  styleUrls: ['./tg3.component.css']
})
export class TG3Component implements OnInit {

  bouchemastg3:  bouchematg3[] = [];
  constructor (private Bouchematg3Service:Bouchematg3Service  ) { }

  ngOnInit(): void {
    this.getbouchemastg3();
   
  }
  getbouchemastg3(): void {
    this.Bouchematg3Service.getVal().subscribe( bouchemastg3 => {
      this. bouchemastg3 =  bouchemastg3;
      console.log("Récuperation des données:",bouchemastg3);
    
  },
  error => {
    console.error("Erreur lors de la récupération des Données:", error);
  });
}
}