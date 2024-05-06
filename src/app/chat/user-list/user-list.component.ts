import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent  {

  searchValue: string = '';
  dynamicMessage: string = "This is a dynamic message";
  users = [
    { id: 5, name: 'eya', image: '/assets/images/eyaa.jpg', status: 'active now' },
    { id: 1, name: 'Faika', image: '/assets/images/img1.png' },
    { id: 2, name: 'Nabil', image: '/assets/images/img5.png', status: 'active now' },
    { id: 3, name: 'khaled', image: '/assets/images/img6.png', status: 'active now' },
    { id: 4, name: 'oumayma', image: '/assets/images/oumaa.JPG', status: 'active now' },

    
  ];

  constructor(private router: Router) {}

  navigateToMessages(userId: number): void {
    this.router.navigate(['/messages', userId],
      
    );
  }
  filterUsers(): any[] {
    return this.users.filter(user => {
      // Filtrer les utilisateurs dont le nom correspond à la valeur de recherche (insensible à la casse)
      return user.name.toLowerCase().includes(this.searchValue.toLowerCase());
    });
   
}
}