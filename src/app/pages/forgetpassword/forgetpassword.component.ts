import { Component, OnInit } from '@angular/core';
import { ResetpasswordService } from 'src/app/services/resetpassword.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent  {

  email: string = '';
  newPassword: string = '';
  message: string = '';

  constructor(private resetPasswordService: ResetpasswordService) { }

  resetPassword(): void {
    this.resetPasswordService.resetPassword(this.email, this.newPassword)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'Mot de passe réinitialisé avec succès!';
        },
        error => {
          console.log(error);
          this.message = 'Erreur lors de la réinitialisation du mot de passe.';
        }
      );
  }

}