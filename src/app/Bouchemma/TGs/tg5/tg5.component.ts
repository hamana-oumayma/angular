import { Component, OnInit } from '@angular/core';
import { bouchematg5 } from 'src/app/models/bouchemmatg5';
import { Bouchematg5Service } from 'src/app/services/bouchematg5.service';

@Component({
  selector: 'app-tg5',
  templateUrl: './tg5.component.html',
  styleUrls: ['./tg5.component.css']
})
export class TG5Component implements OnInit {

  bouchemastg5:  bouchematg5[] = [];
  constructor (private Bouchematg5Service:Bouchematg5Service  ) { }

  ngOnInit(): void {
    this.getbouchemastg5();
   
  }
  getbouchemastg5(): void {
    this.Bouchematg5Service.getVal().subscribe( bouchemastg5 => {
      this. bouchemastg5 =  bouchemastg5;
      console.log("Récuperation des données:",bouchemastg5);
    
  },
  error => {
    console.error("Erreur lors de la récupération des Données:", error);
  });
}
}