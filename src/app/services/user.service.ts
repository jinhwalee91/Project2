// This is mainly for navbar menu showing depends on log in 
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})

export class UserService {



signedIn$ = new BehaviorSubject<boolean>(true)
username: string = ''

url = 'https://api.angular-email.com/auth' 

constructor(private _http: HttpClient) {

 }


signedIn(): Observable<SignedInResponse> {
  return this._http.get<SignedInResponse>(`${this.url}/signedIn`).pipe(
    tap((response: SignedInResponse)=> {
      this.username = response.username
      this.signedIn$.next(response.authenticated)
    })
  )
}






}

interface SignedInResponse {
  authenticated: boolean,
  username: string
}


