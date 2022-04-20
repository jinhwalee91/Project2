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

   getUserbyEmail(getUserbyEmail : string) {
    return this._http.get();
   }


}
