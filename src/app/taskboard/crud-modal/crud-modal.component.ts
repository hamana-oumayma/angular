import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import{ Task} from 'src/app/taskboard/tasks.model';
@Component({
  selector: 'app-crud-modal',
  templateUrl: './crud-modal.component.html',
  styleUrls: ['./crud-modal.component.css']
})
export class CrudModalComponent {
  @Input()
   id!: number;
  title: string = '';
  description: string = '';
  createdBy: string = '';
  date: string = '';

  constructor(public activeModal: NgbActiveModal, private http: HttpClient) { }

  submitForm() {
    const taskData: Task = {
      id: this.id,
      title: this.title,
      description: this.description,
      createdBy: this.createdBy,
      datecreation: new Date(this.date) // Convertir la chaîne de date en objet Date
    };

    this.http.post<Task>('http://localhost:8000/tasks', taskData).subscribe(
      (response) => {
        console.log('Tâche ajoutée avec succès', response);
        this.activeModal.close();
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de la tâche', error);
      }
    );
  }
}