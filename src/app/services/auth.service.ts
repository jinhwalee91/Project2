// It will include 1. Login component 2. Create Account component 

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map } from 'rxjs';

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


   userLogin (email : string , password : any) {
      return this._http.get("https://localhost:7274/api/Login/Login/"+email+'/'+ password )
          
   }


   createAccount(firstname : any, lastname : any, email: any, password : any, gender: any)
   {
     var body = {firstname, lastname, email, password, gender};
 
     return this._http.post("https://localhost:7274/api/Login/CreateLogin?firstName=" + firstname + "&lastName=" + lastname + "&email="+ email + "&password="+ password  +"&gender="+ gender, body, {responseType : 'text'}
     
     );


   }
//                           https://localhost:7274/api/Login/CreateLogin?firstName=kelly&lastName=crook&email=kelly%40gmail.com&password=1234&gender=female

    // https://localhost:44390/swagger/index.html



/*
userSignup (firstName : string , lastName : string, email : string , password : string , gender : string)
{
  return this._http.post(); 
}
*/ 


}