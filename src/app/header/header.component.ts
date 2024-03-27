import {Component, EventEmitter, OnInit, Output , Input , ViewChild } from '@angular/core';
import * as screenfull from 'screenfull' ;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  public bigMenu = false;
    @Input() open;
  isFullscreen: boolean = false;
    constructor() {
      this.bigMenu = false;
     this.open = false;
     }
  
    ngOnInit(): void {
      console.log(screenfull); 
    }
  toggleSidebar(){
    this.toggleSidebarForMe.emit();
  }
  elem=document.documentElement;
  toggleFullscreen() {
    if (!document.fullscreenElement) { 
      document.documentElement.requestFullscreen().then(() => {
        this.isFullscreen = true; 
      }).catch((err) => {
        console.log(`Erreur lors du passage en mode plein écran : ${err}`);
      });
    } else { 
      document.exitFullscreen().then(() => {
        this.isFullscreen = false; 
      }).catch((err) => {
        console.log(`Erreur lors de la sortie du mode plein écran : ${err}`);
      });
    }
  }
  }
  