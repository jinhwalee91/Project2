import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _http:HttpClient;


  constructor(private _httpRef: HttpClient) {
    this._http = _httpRef;
  }

  getAllLogin() {
    return this._http.get('https://localhost:7274/api/Login/elist');
  }
}
