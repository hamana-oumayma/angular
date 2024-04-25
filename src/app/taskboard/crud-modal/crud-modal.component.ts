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

  constructor(public activeModal: NgbActiveModal, private http: HttpClient) { }

  submitForm() {
    const newTask = {
      title: this.title,
      description: this.description,
      createdBy: this.createdBy,
      date: this.date
    };

    // Envoie de la requête POST au backend Symfony
    this.http.post('http://localhost:8000/tasks', newTask).subscribe((response) => {
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