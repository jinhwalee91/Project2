import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

userList = [
{userId : 'julie', userPassword : 'pw1234'},
{userId : 'Mike', userPassword : 'pw1234'}
]

addUser(newUser : any){
this.userList.push(newUser);
}

  constructor() { }

  ngOnInit(): void {
  }

}
