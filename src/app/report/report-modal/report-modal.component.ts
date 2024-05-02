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
  id:0 | undefined;
  firstName: string = ''; 
  lastName: string = ''; 
  centrale: string = ''; 
  report: string='';
  reportFile?: File;
  date: string='';
  newReport: Report = {
    id: 0,
    firstName: '',
    lastName: '',
    centrale: '',
    report: '',
    date: ''
  };
  
  constructor(public dialogRef: MatDialogRef<ReportModalComponent>, private http: HttpClient) { }

  ngOnInit(): void {}

  submitReport(): void {
    const formData = new FormData();
    const date = new Date(this.newReport.date);
    formData.append('date', date.toISOString());
    formData.append('firstName', this.newReport.firstName);
    formData.append('lastName', this.newReport.lastName);
    formData.append('centrale', this.newReport.centrale);
    formData.append('report', this.newReport.report);
    if (this.newReport.reportFile) {
      formData.append('reportFile', this.newReport.reportFile);
    }
    
    if (this.newReport.id) {
      formData.append('id', this.newReport.id.toString());
      this.http.put('http://localhost:8000/report/update', formData).subscribe(
        (response) => {
          console.log('Report updated successfully', response);
          this.dialogRef.close(this.newReport);
        },
        (error) => {
          console.error('Error updating report', error);
        }
      );
    } else {
      this.http.post('http://localhost:8000/report/new', formData).subscribe(
        (response) => {
          console.log('Report added successfully', response);
          this.dialogRef.close();
        },
        (error) => {
          console.error('Error adding report', error);
        }
      );
    }
    
  }
  
  
  handleFileInput(event: any): void {
    const file = event.target.files[0];
    this.newReport.reportFile = file;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}