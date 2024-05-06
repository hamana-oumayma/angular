import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alertSubject = new Subject<Alert>();

  constructor() { }

  getAlerts() {
    return this.alertSubject.asObservable();
  }

  success(message: string) {
    this.alertSubject.next({ type: 'success', message });
  }

  error(message: string) {
    this.alertSubject.next({ type: 'error', message });
  }
}

export interface Alert {
  type: 'success' | 'error';
  message: string;
}