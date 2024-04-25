import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
  
  @Input() selectedTab!: string;
  items = [
    { date: '10/03/2024', firstName: 'oumayma', lastName: 'hamana', centrale: 'Rades', report: 'Rapport 1' },
    {  date: '15/03/2024', firstName: 'eya', lastName: 'naouar', centrale: 'Goulette', report: 'Rapport 2' },
    { date: '20/04/2024', firstName: 'asma', lastName: 'jh', centrale: 'Sousse', report: 'Rapport 3' }
  ];

  importReport() {
    // Créer un élément input de type "file"
    const input = document.createElement('input');
    input.type = 'file';

    // Ajouter un écouteur d'événements pour détecter la sélection de fichier
    input.addEventListener('change', (event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file) {
        // Vous pouvez utiliser ici le code pour télécharger ou traiter le fichier
        console.log("Fichier sélectionné :", file);
      }
    });


    // Cliquer sur l'élément input pour ouvrir la boîte de dialogue de sélection de fichier
    input.click();
 
  }
  showUserInfo(item: any) {
    console.log("Afficher les informations de l'utilisateur :", item);
    // Ajoutez ici le code pour afficher les informations de l'utilisateur
  }
  
  editUser(item: any) {
    console.log("Modifier l'utilisateur :", item);
    // Ajoutez ici le code pour modifier l'utilisateur
  }
  
  deleteUser(item: any) {
    console.log("Supprimer l'utilisateur :", item);
    // Ajoutez ici le code pour supprimer l'utilisateur
  }

  //ShoppingCard
  products: any[] = [
    { image:'/assets/images/total.jfif' ,name: 'Preslia 32 (TOTAL)', price: 2.199, quantity: 2 },
    { image:'/assets/images/mobil.jpg' , name: 'MOBIL : DTE 832', price: 1.987, quantity: 2 },
    { image:'/assets/images/Q8.jfif',name: 'Q8 volta', price: 2.097, quantity: 1 },
    
  ];

  deleteProduct(product: any) {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  decreaseQuantity(product: any) {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  increaseQuantity(product: any) {
    product.quantity++;
  }

  calculatetotalAmount(): number {
    let total = 0;
    for (const product of this.products) {
      total += product.price * product.quantity;
    }
    return total;
  }
  
}

