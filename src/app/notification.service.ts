import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifications: string[] = [];

  addNotification(message: string) {
    this.notifications.push(message);
  }

  clearNotifications() {
    this.notifications = [];
  }
}