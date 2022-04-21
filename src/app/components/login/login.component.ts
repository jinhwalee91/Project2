import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


 greetUser(){
   alert ('Welcome to Typing Competiton')
 } 

 _login : AuthService
 userDetail : any ; 

  constructor(_loginRef : AuthService) {

    this._login = _loginRef;

    };

userLogin (user : any){
this._login.getUser(user).subscribe( (data) => {this.userDetail = data})
}



  ngOnInit(): void {
  }

}
