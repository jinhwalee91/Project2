// It will include 1. Login component 2. Create Account component 

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, first, map, Observable } from 'rxjs';
import { Users } from '../models/Users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private _http : HttpClient; 
signupDetail : any = [];

  constructor(private _httpRef : HttpClient) {
    this._http = _httpRef;
   }

   
   getAllUsers () {
    return this._http.get("https://localhost:7274/api/Login/elist");
   }

   /*
   userSignup(data : any){
     return this._http.post<any>("https://localhost:7274/api/Login/CreateLogin" , data)
    .pipe(map( (res: any) => {
       return res;
     } ))
   }
  */

   userSignup(user : Users) : Observable<Users> {
    return this._http.post<Users>('https://localhost:7274/api/Login/CreateLogin', user)
    .pipe(map( (res: any) => {
      return res;
    } ))  
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


