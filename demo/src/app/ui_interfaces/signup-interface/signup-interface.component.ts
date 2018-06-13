import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from '../../auth-service';
import { Register } from '../../shared/user/register.model';
import { AngularFireAuth } from "angularfire2/auth";



@Component({
  selector: 'app-signup-interface',
  templateUrl: './signup-interface.component.html',
  styleUrls: ['./signup-interface.component.css']
})
export class SignupInterfaceComponent implements OnInit {

  user = {} as Register;

  constructor( private afAuth: AngularFireAuth ) {
  }


  async register( user: Register ){
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.index, user.password);
      console.log(result);
      if (result) {
        console.log(result); 
      }
      
    } catch (error) {
      console.error(error);
      
    }
  }

  ngOnInit() {
  }

}
