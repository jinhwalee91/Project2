import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AdminGuardService implements CanLoad {
  constructor(private router: Router) {}

  canLoad(route: Route): boolean {
    if (route.path == 'admin') { //to do: make it "if logged in as admin"
      alert('You are not authorised to visit this page');
      return true; //this should be "return false" in order to deny access;
                   //I have it set to "true" for now to test the service
    } else {
      return true;
    }
  }
}
