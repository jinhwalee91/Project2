import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginUser(item : any){

console.warn (item);

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
