import { Component, OnInit } from '@angular/core';
import { SignUp } from '../models/signup';
import { SignupService } from '../services/SignUp.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {
 
  constructor() { }

  ngOnInit(): void {
  }

}
