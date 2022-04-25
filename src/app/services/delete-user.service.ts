import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteUserService {

  private _http : HttpClient; 


  constructor(private _httpRef : HttpClient) {
    this._http = _httpRef;
   }

   deleteUserProfile (userId : any) {
      return this._http.delete("https://localhost:7274/RemoveProfile/" + userId );
   }
   deleteUserLogin (userId : any) {
    return this._http.delete("https://localhost:7274/api/Login/Delete/" + userId );
   }
   
   
}
