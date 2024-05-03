import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  currentYear: number;
  currentMonth: number;
  daysInMonth: (number | null)[] = [];
  dayNames: string[] = [ 'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  constructor() {
    this.currentMonth = new Date().getMonth();
    this.currentYear = new Date().getFullYear();
    this.generateDaysInMonth();
  }

  ngOnInit(): void {
    this.generateDaysInMonth();
  }

  chunk<T>(value: T[], size: number): T[][] {
    if (!value || value.length === 0 || !size) {
      return [];
    }
    const result: T[][] = [];
    for (let i = 0; i < value.length; i += size) {
      result.push(value.slice(i, i + size));
    }

    return result;
  }

  private generateDaysInMonth(): void {
    const date = new Date(this.currentYear, this.currentMonth, 1);
    const firstDayOfWeek = date.getDay();
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  
    this.daysInMonth = []; 
    for (let i = 0; i < firstDayOfWeek; i++) {
      this.daysInMonth.push(null);
    }
  
    for (let i = 1; i <= daysInMonth; i++) {
      this.daysInMonth.push(i);
    }
  }

  public prevMonth(): void {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.generateDaysInMonth();
  }

  public nextMonth(): void {
    this.currentMonth++;
    if (this.currentMonth >= 12) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.generateDaysInMonth();
  }

  public today(): void {
    this.currentYear = new Date().getFullYear();
    this.currentMonth = new Date().getMonth();
    this.generateDaysInMonth();
  }
}