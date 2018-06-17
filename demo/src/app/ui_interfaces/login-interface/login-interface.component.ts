import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-login-interface',
  templateUrl: './login-interface.component.html',
  styleUrls: ['./login-interface.component.css']
})
export class LoginInterfaceComponent implements OnInit {

  signinForm: FormGroup;
  constructor(private authService: AuthService) { }
  ngOnInit() {
    this.signinForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'pass': new FormControl(null, Validators.required),
    });
  }
  signin(){
    this.authService.signIn(this.signinForm.value.email, this.signinForm.value.pass);
  }

}
