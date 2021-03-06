import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupInterfaceComponent } from './ui_interfaces/signup-interface/signup-interface.component';
import { LoginInterfaceComponent } from './ui_interfaces/login-interface/login-interface.component';
import { GetdetailsComponent } from './ui_interfaces/getdetails/getdetails.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full' },
    { path:'login' , component: LoginInterfaceComponent},
    { path:'getdetails' , component: GetdetailsComponent},
    { path:'register' , component: SignupInterfaceComponent},

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})



export class AppRoutingModule {}
