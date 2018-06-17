import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  token: string;
  
  constructor(private authService: AuthService,private router: Router){
  }

  ngOnInit(){
  }

  onLogout(){
    this.authService.logout();
  }
  
  checkUserLoggedIn(){
    return localStorage.getItem('isLoggedIn') ? true : false;
  }
}
