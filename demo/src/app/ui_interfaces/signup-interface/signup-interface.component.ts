import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from '../../auth-service';
@Component({
  selector: 'app-signup-interface',
  templateUrl: './signup-interface.component.html',
  styleUrls: ['./signup-interface.component.css']
})
export class SignupInterfaceComponent implements OnInit {

  constructor( private authService : AuthService) { }

  ngOnInit() {
  }

  onSubmit( form : NgForm ){
    const firstname = form.value.first_name;
    const lastname = form.value.last_name;
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signup(email , password);


  }

}
