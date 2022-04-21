import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})


export class CreateAccountComponent implements OnInit {

_authService : AuthService ;
regUser : any ; 

constructor (_authServiceRef : AuthService) {
  this._authService = _authServiceRef
}

registerUser(user : any )
{
  this._authService.registerUser(user).subscribe (
     (data) => {this.regUser = data; console.log(this.regUser)
  })
}

   
  ngOnInit(): void {
  }

}






