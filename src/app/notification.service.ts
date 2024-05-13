import { Injectable } from '@angular/core';
import { SignupService } from './services/SignUp.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotificationService implements CanActivate{
  constructor(private signupService: SignupService, private router: Router) {}

  canActivate(): boolean {
    if (this.signupService.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}