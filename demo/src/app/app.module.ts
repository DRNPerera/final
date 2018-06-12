import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginInterfaceComponent } from './ui_interfaces/login-interface/login-interface.component';
import { SignupInterfaceComponent } from './ui_interfaces/signup-interface/signup-interface.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth-service';
import { GetdetailsComponent } from './ui_interfaces/getdetails/getdetails.component';

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
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
