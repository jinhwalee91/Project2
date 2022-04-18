import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
newUserUrl : string = '/create-account';
loginUrl : string = '/login';


  constructor(_http : HttpClient) { }




}


// this is User Service 
// It will include 1. Login component 2. Create Account component