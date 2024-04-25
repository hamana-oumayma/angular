import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { Achat } from 'src/app/models/Achat';
@Component({
  selector: 'app-ajout-modal',
  templateUrl: './ajout-modal.component.html',
  styleUrls: ['./ajout-modal.component.css']
})
export class AjoutModalComponent{
  newProduct: Achat = {
    image: null, name: '', price: 0, quantity: 0,
    id: 0
  }; // Utilisation de l'interface Achat

  constructor(public dialogRef: MatDialogRef<AjoutModalComponent>, private http: HttpClient) { }

  ngOnInit(): void {
  }

  submitProduct(): void {
    // Utilisation de this.newProduct pour obtenir les données du formulaire
    this.http.post('http://localhost:8000/achat', this.newProduct).subscribe(
      (response) => {
        console.log('Produit ajouté avec succès', response);
        // Fermer le modal après l'ajout du produit
        this.dialogRef.close();
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du produit', error);
      }
    );
  }

  closeDialog(): void {
    // Fermer le modal sans ajouter de produit
    this.dialogRef.close();
  }
}