import { Component, OnInit } from '@angular/core';
import { TablesComponent } from '../tables/tables.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedTab: string = 'extended'; // Définissez l'onglet sélectionné comme "extended"


  constructor() { }

  ngOnInit(): void {
    
  }

}
