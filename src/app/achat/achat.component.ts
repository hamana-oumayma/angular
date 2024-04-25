import { Component, OnInit } from '@angular/core';
import { AchatService } from '../services/achat.service';
import { Achat } from '../models/Achat';
import { MatDialog } from '@angular/material/dialog';
import { AjoutModalComponent } from './ajout-modal/ajout-modal.component';
@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})

export class AchatComponent implements OnInit {
  products: Achat[] = [];
  newProduct: Achat = { id: 0, image: null , name: '', price: 0, quantity: 0 };
  selectedTab: string = '';
  showAddProductForm: boolean = false;

  constructor(private achatService: AchatService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadAchats();
  }

  loadAchats(): void {
    this.achatService.getAchats().subscribe(achats => {
      this.products = achats;
    });
  }
  onImageSelected(event: any) {
    const file: File = event.target.files[0]; // Récupère le fichier depuis l'événement
    this.newProduct.image = file; // Affecte le fichier à la propriété image
  }

  addProduct(): void {
    this.dialog.open(AjoutModalComponent, {
     // spécifiez la largeur souhaitée pour le modal
      // vous pouvez également passer des données au modal si nécessaire
      // data: { /* your data */ }
    });
  }

  deleteProduct(product: Achat): void {
    this.achatService.deleteAchat(product.id).subscribe(() => {
      this.products = this.products.filter(p => p !== product);
    });
  }

  decreaseQuantity(product: Achat): void {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  increaseQuantity(product: Achat): void {
    product.quantity++;
  }

  calculateTotalAmount(): number {
    return this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

 
}