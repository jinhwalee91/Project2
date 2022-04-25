import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{



  private _http : HttpClient; 
  userDetail : any = "blank"
  isUserLoggedin:boolean = false;

  constructor(private _httpRef : HttpClient) {
    this._http = _httpRef; 
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
      if(this.userDetail != "blank")
      {
        return true;
      }
      else
      {
        return false;
      }
  }



  userLogin (email : string , password : any) {
 
    let url = "https://localhost:7274/api/Login/Login/"+email+'/'+ password ;
    return this._http.get(url);
           };
    getUserDetails (email : string) {
    return this._http.get("https://localhost:7274/api/Login/ViewByEmail/"+email);
           };
    getUserLetterScores (email : string) {
    return this._http.get("https://localhost:7274/api/Login/GetLetterScores/"+email);
           };
        

  
   

}
