



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
  static userIsAdmin: any = false;

  constructor(_userLoginRef : AuthGuardService, private routerRef : Router) {
    this._userLogin = _userLoginRef
    this._router = routerRef
    };

    
    userLogin(email : any , password : any) {
      this._userLogin.userLogin(email, password).subscribe( (data) =>{
        if(data == null ) {
          console.log('User not found, login failed');
          alert('Login failed');
        }
        else {
          this._userLogin.userDetail = data ; 
          console.log ('Login successful');
          this._userLogin.isUserLoggedin = true;
          this._router.navigateByUrl("/home");

          // the following code should check if admin, and if true, gives access to admin component
          //doesn't actually work yet
          LoginComponent.userIsAdmin = this._userLogin.checkIsAdmin(email);
          if(LoginComponent.userIsAdmin.isAdmin == true){
            alert('Welcome admin!');
          }
          else{
            alert('Welcome user!');
          }

        }

      },(err) => {
        console.log('Login failed');
        alert('Login failed');
      });

  };
  
  




      ngOnInit(): void {
      }
    


  }
    