
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})

export class UserService {

_http : HttpClient
userAccount : any 

constructor(private _httpRef: HttpClient) {
this._http = _httpRef
 }


 findAccount(email : any) {
  return this._http.get("https://localhost:7274/api/Login/ViewByEmail/" + email)
 }

}



