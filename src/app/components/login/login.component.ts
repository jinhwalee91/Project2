



import { Component, OnInit } from '@angular/core';
import { CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

_userLogin : AuthGuardService ;
 loginUser : any ;
 _router : Router;

  constructor(_userLoginRef : AuthGuardService, private routerRef : Router) {
    this._userLogin = _userLoginRef
    this._router = routerRef
    };

    
    userLogin(email : any , password : any) {
      this._userLogin.userLogin(email, password).subscribe( (data) =>{
        if(data == null ) {
          console.log('User not found, login failed');
        }
        else {
          this._userLogin.userDetail = data ; 
          console.log ('Login successful');
          this._userLogin.isUserLoggedin = true;
          this._router.navigateByUrl("/home");
        }

      },(err) => {
        console.log('Login failed');
      });

      };




      ngOnInit(): void {
      }
    


  }
    