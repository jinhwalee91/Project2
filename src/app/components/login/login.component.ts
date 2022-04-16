import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



 greetUser(){
   alert ('Welcome to Typing Competiton')
 } 
 /* 
userList = [
  {uId : 'julielike', uPassword : '1234'},
]

login (){

  return "login successful"
}

addUser (uId : string , uPassword : string ){
  this.userList.push({uId, uPassword})
}  
*/


  constructor() { }

  ngOnInit(): void {
  }

}
