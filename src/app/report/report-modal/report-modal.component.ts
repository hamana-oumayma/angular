import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Report } from 'src/app/models/Report';
@Component({
  selector: 'app-report-modal',
  templateUrl: './report-modal.component.html',
  styleUrls: ['./report-modal.component.css']
})
export class ReportModalComponent implements OnInit {
  newReport: Report = {
    date: new Date(),
    firstName: '',
    lastName: '',
    centrale: '',
    report: '',
    id: 0
  };
  
  constructor(public dialogRef: MatDialogRef<ReportModalComponent>, private http: HttpClient) { }

  ngOnInit(): void {}

  submitReport(): void {
    const formData = new FormData();
    // Convertissez la date en objet Date avant de l'ajouter à formData
    const date = new Date(this.newReport.date);
    formData.append('date', date.toISOString());
    formData.append('firstName', this.newReport.firstName);
    formData.append('lastName', this.newReport.lastName);
    formData.append('centrale', this.newReport.centrale);
  
    // Vérifiez si reportFile est défini avant de l'ajouter à formData
    if (this.newReport.reportFile) {
        formData.append('reportFile', this.newReport.reportFile);
    }
  
    this.http.post('http://localhost:8000/report/new', formData).subscribe(
        (response) => {
            console.log('rapport ajouté avec succès', response);
            this.dialogRef.close();
        },
        (error) => {
            console.error('Erreur lors de l\'ajout du rapport', error);
        }
    );
  }
  

  handleFileInput(event: any): void {
    const file = event.target.files[0];
    this.newReport.reportFile = file;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}