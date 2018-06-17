import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from '../../auth.service';
import { Register } from '../../shared/user/register.model';
import { AngularFireAuth } from "angularfire2/auth";
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-interface',
  templateUrl: './signup-interface.component.html',
  styleUrls: ['./signup-interface.component.css']
})
export class SignupInterfaceComponent implements OnInit {
  signupForm: FormGroup;
  user = {} as Register;

  constructor( private afAuth: AngularFireAuth , private authService: AuthService , private router: Router) {
  }

  ngOnInit() {

    this.signupForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'pass': new FormControl(null, Validators.required),
    });
  }

  async register( user: Register ){
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.name, user.password);
      console.log(result);
      if (result) {
        console.log(result); 
      }
      
    } catch (error) {
      console.error(error);
      
    }
  }

  signup(){
    this.authService.signUp(this.signupForm.value.email, this.signupForm.value.pass);
  this.router.navigate(['/login']);
  }

  

}
