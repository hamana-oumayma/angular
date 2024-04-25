import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReportService } from '../services/report.service';
import { Report } from '../models/Report';
import { ReportModalComponent } from './report-modal/report-modal.component';
import { MatDialog } from '@angular/material/dialog'; // Importez MatDialog

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  @Input() selectedTab!: string;
  @Output() addReportClicked = new EventEmitter<void>(); // Ajoutez un EventEmitter

  items: Report[] = [];
  

  constructor(private reportService: ReportService,private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadReports();
  }

  loadReports() {
    this.reportService.getAllReports().subscribe(
      (reports: Report[]) => {
        reports.forEach(item => {
          // Convertir la date en objet Date
          item.date = new Date(item.date);
        });
        this.items = reports;
      },
      (error) => {
        console.error('Error loading reports:', error);
      }
    );
  }
  
  downloadReportFile(file: File): void {
    const url = URL.createObjectURL(file);
    // Utilisez l'URL pour télécharger le fichier
    // Par exemple, redirigez l'utilisateur vers l'URL pour télécharger le fichier
    window.open(url, '_blank');
  }
  
  

  importReport() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.xlsx, .xls, .pdf, .txt'; // Accept only specific file types

    input.addEventListener('change', (event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file) {
        // You can add logic here to handle the file upload
        console.log('Selected file:', file);
      }
    });

    input.click();
  }

 
  deleteUser(item: Report) {
    console.log('Delete user:', item);
    // Add logic here to delete user
    // For example, you can prompt the user for confirmation before deleting
  }
  formatDate(date: any): string {
    if (!date) return ''; // Vérifiez si la date est null ou undefined
    if (!(date instanceof Date)) date = new Date(date); // Convertir en objet Date si nécessaire
    return date.toLocaleDateString(); // Formater la date
  }
 
  addreport(): void {
    this.addReportClicked.emit();
    this.dialog.open(ReportModalComponent, {
     // spécifiez la largeur souhaitée pour le modal
      // vous pouvez également passer des données au modal si nécessaire
      // data: { /* your data */ }
    });
  }
  openEditModal(item: Report): void {
    const dialogRef = this.dialog.open(ReportModalComponent, {
      data: item // Passer les données de l'élément à la modal
    });
  }
}