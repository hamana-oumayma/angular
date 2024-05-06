import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent{
  searchResults: { name: string; path: string; }[] = [];
  centrales = [
    { name: 'Birmchergua', path: '/Birmchergua/tg1' },
    { name: 'Sousse', path: '/Sousse/tg1' },
    { name: 'Rades', path: '/Rades/tg1' },
    { name: 'Feriana', path: '/Feriana/tg1' },
    { name: 'Bouchemma', path: '/Bouchemma/tg4' },
    { name: 'Thyna', path: '/Thyna/tg1' },
    { name: 'Goulette', path: '/Goulette/tg1' },
  ];

  centraleInfos: { [key: string]: string } = {
    'Birmchergua': '/Birmchergua/info',
    'Sousse': '/Sousse/info',
    'Rades': '/Rades/info',
    'Feriana': '/Feriana/info',
    'Bouchemma': '/Bouchemma/info',
    'Thyna': '/Thyna/info',
    'Goulette': '/Goulette/info',
    
  };

  constructor(private router: Router) {}

  searchCentrale(event: any) {
    const query = event.target.value.toLowerCase().trim();
    if (query === 'info') {
      this.searchResults = this.centrales.map(centrale => ({ name: centrale.name, path: this.centraleInfos[centrale.name] }));
    } else if (query === 'chat') {
      this.router.navigateByUrl('/wholePage');
      this.searchResults = [];
    } else if (query === 'taskboard') {
      this.router.navigateByUrl('/tasks');
      this.searchResults = [];
    } else {
      this.searchResults = this.centrales.filter(
        centrale => centrale.name.toLowerCase().includes(query)
      );
    }
  }
}