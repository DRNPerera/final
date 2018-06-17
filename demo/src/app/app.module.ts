import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGaurdService } from './authguard.service';
import { AppComponent } from './app.component';
import { LoginInterfaceComponent } from './ui_interfaces/login-interface/login-interface.component';
import { SignupInterfaceComponent } from './ui_interfaces/signup-interface/signup-interface.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { GetdetailsComponent } from './ui_interfaces/getdetails/getdetails.component';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginInterfaceComponent,
    SignupInterfaceComponent,
    GetdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [AuthService, AuthGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
