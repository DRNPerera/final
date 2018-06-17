//Import core 
import { Injectable } from '@angular/core';
//Import router modules
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot  } from '@angular/router';
//Import service
import { AuthService } from './auth.service';
@Injectable()
export class AuthGaurdService implements CanActivate {
  constructor(private authService: AuthService){};
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.authService.isAuthenticated();
  }
}