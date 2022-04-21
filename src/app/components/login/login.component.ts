import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

_userLogin : AuthService ;
 loginUser : any ;

  constructor(_userLoginRef : AuthService) {
    this._userLogin = _userLoginRef
    };

    userLogin(email : any , password : any) {
      this._userLogin.userLogin(email,password).subscribe(
        (data) => {this.loginUser = data ; console.log(this.loginUser)}
      )
  }
    



  ngOnInit(): void {
  }

}
