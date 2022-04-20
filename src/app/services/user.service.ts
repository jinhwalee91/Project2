import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {
newUserUrl : string = '/create-account';
loginUrl : string = '/login';


signedIn$ = new BehaviorSubject<boolean>(true)
username: string = ''

url = 'https://api.angular-email.com/auth'
constructor(private http: HttpClient) { }

signedIn(): Observable<SignedInResponse> {
  return this.http.get<SignedInResponse>(`${this.url}/signedIn`).pipe(
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



// this is User Service 
// It will include 1. Login component 2. Create Account component