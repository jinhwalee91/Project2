// It will include 1. Login component 2. Create Account component 

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private _http : HttpClient; 


private _loginUrl = "https://localhost:7274/api/register"     // register test

  constructor(private _httpRef : HttpClient) {
    this._http = _httpRef;
   }

   
   getAllUsers () {
    return this._http.get("https://localhost:7274/api/Login/elist");
   }

  
   registerUser(user : any){
     return this._http.post<any>(this._loginUrl, user)    // register test
   }
  

   userLogin (email : string , password : any) {
      return this._http.get("https://localhost:7274/api/Login/Login/"+email+'/'+ password )
          
   }



   }



/*
userSignup (firstName : string , lastName : string, email : string , password : string , gender : string)
{
  return this._http.post(); 
}
*/ 


