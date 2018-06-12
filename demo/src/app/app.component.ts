import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  ngOnInit(){
    firebase.initializeApp(
      {
        
          apiKey: "AIzaSyD1aNtTMDXFPxDBoS6gObtKQuGEGbkSRUM",
          authDomain: "angularfirebase-28ed6.firebaseapp.com",
          
      }
    );
  }
}