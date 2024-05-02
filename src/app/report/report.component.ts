import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { ReportService } from '../services/report.service';
import { Report } from '../models/Report';
import { ReportModalComponent } from './report-modal/report-modal.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit  {
  @Input() selectedTab: string = '';
  @Output() addReportClicked = new EventEmitter<void>();
  @ViewChild('modalContent', { read: ViewContainerRef, static: true }) modalContent!: ViewContainerRef;
  items: Report[] = [];

  constructor(private reportService: ReportService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadReports();
  }

  loadReports(): void {
    this.reportService.getAllReports().subscribe(
      (reports: Report[]) => {
        this.items = reports.map(report => ({
          ...report,
          date: this.formatDate(report.date)
        }));
      },
      (error) => {
        console.error('Error loading reports:', error);
      }
    );
  }

  downloadReportFile(fileName: string): void {
    if (!fileName) {
      console.error('File name is undefined or null');
      return;
    }
    
    const id = this.mapFileNameToId(fileName);
    
    this.reportService.downloadReport(id).subscribe(
      (data: Blob) => {
        const url = window.URL.createObjectURL(data);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      },
      (error) => {
        console.error('Error downloading file:', error);
      }
    );
  }

  mapFileNameToId(fileName: string): number {
    let hash = 0;
    for (let i = 0; i < fileName.length; i++) {
      const charCode = fileName.charCodeAt(i);
      hash = (hash << 5) - hash + charCode;
      hash |= 0; // Convertir en entier 32 bits signé
    }
    return hash;
  }

  formatDate(date: any): string {
    if (!date || isNaN(Date.parse(date))) return '';
    const formattedDate = new Date(date).toISOString().split('T')[0];
    return formattedDate;
  }

  deleteUser(item: Report): void {
    if (item.id !== undefined) {
      const confirmDelete = confirm('Are you sure you want to delete this report?');
      if (confirmDelete) {
        this.reportService.deleteReport(item.id).subscribe(
          () => {
            console.log('Report deleted successfully');
            this.loadReports();
          },
          (error) => {
            console.error('Error deleting report:', error);
          }
        );
      }
    } else {
      console.error('Undefined report ID:', item);
    }
  }

  addReport(): void {
    this.addReportClicked.emit();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    this.dialog.open(ReportModalComponent, dialogConfig);
  }

  openEditModal(item: Report): void {
    console.log('Report to edit:');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.data = {
      id: item.id,
      firstName: item.firstName,
      lastName: item.lastName,
      centrale: item.centrale,
      report: item.report,
      reportFile: item.reportFile,
      date: item.date
    };
    const modalRef = this.dialog.open(ReportModalComponent, dialogConfig);
  
    modalRef.afterClosed().subscribe((editedReport) => {
      if (editedReport) {
        const index = this.items.findIndex(r => r.id === editedReport.id);
        if (index !== -1) {
          this.items[index] = editedReport;
        }
      }
    });
  }
}