import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';

@Injectable({providedIn: 'root'})
export class AdminGuardService implements CanLoad {
  constructor(private router: Router) {}

  _userLogin : LoginComponent | undefined;

  canLoad(route: Route): boolean {
    if (route.path == 'admin' && LoginComponent.userDetails[0].isAdmin == false) { 
      alert('You are not authorised to visit this page');
      return false; 
    } else {
      return true;
    }
  }
}
