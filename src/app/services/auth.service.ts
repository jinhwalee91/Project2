// It will include 1. Login component 2. Create Account component 

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private _http : HttpClient; 


  constructor(private _httpRef : HttpClient) {

    this._http = _httpRef;
   }


   
   getAllUsers () {
    return this._http.get("https://localhost:7274/api/Login/elist");
   }


/*
userSignup (firstName : string , lastName : string, email : string , password : string , gender : string)
{
  return this._http.post(); 
}
*/ 

}
