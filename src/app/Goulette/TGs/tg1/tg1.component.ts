import { Component, OnInit } from '@angular/core';
import { goulettetg1 } from 'src/app/models/goulettetg1';
import { Goulettetg1Service } from 'src/app/services/goulettetg1.service';

@Component({
  selector: 'app-tg1',
  templateUrl: './tg1.component.html',
  styleUrls: ['./tg1.component.css']
})
export class TG1Component implements OnInit {

  
  goulettestg1:  goulettetg1[] = [];
  constructor (private  goulettetg1Service: Goulettetg1Service  ) { }

  ngOnInit(): void {
    this.getgoulettestg1();
   
  }
  getgoulettestg1(): void {
    this. goulettetg1Service.getVal().subscribe(  goulettestg1 => {
      this. goulettestg1=   goulettestg1;
      console.log("Récuperation des données:", goulettestg1);
    
  },
  error => {
    console.error("Erreur lors de la récupération des Données:", error);
  });
}
}