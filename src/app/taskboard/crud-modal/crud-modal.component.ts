import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-crud-modal',
  templateUrl: './crud-modal.component.html',
  styleUrls: ['./crud-modal.component.css']
})
export class CrudModalComponent {
  @Input() id!: number;
  title: string = '';
  description: string = '';
  createdBy: string = '';
  date: string = '';
  image: File | null = null; // Ajout de la propriété image

  constructor(public activeModal: NgbActiveModal, private http: HttpClient) { }

  submitForm() {
    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('description', this.description);
    formData.append('createdBy', this.createdBy);
    formData.append('date', this.date);

    // Vérifie si une image a été sélectionnée avant de l'ajouter au formulaire FormData
    if (this.image) {
      formData.append('image', this.image as File);
    }

    // Envoie de la requête POST au backend Symfony avec le formulaire FormData
    this.http.post('http://localhost:8000/tasks', formData).subscribe((response) => {
      // Réponse du serveur après l'ajout de la tâche
      console.log('Tâche ajoutée avec succès', response);
      // Fermer la modal après l'ajout de la tâche
      this.activeModal.close();
    }, (error) => {
      // Gérer les erreurs en cas d'échec de l'ajout de la tâche
      console.error('Erreur lors de l\'ajout de la tâche', error);
    });
  }
}