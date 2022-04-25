import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-find-account',
  templateUrl: './find-account.component.html',
  styleUrls: ['./find-account.component.css']
})
export class FindAccountComponent implements OnInit {

_findaccount : UserService ;
_accountInfo : any ;

  constructor(_findaccountRef : UserService) 
  {
    this._findaccount = _findaccountRef ;
   }

  


   findAccount(email : any) {
    this._findaccount.findAccount(email).subscribe ( (data)=>{
      if(data == null) {
        console.log('No account found');
        alert('No user information exist. Please try again');
      }
      else {
        this._accountInfo = data; 
       console.log(this._accountInfo);
        alert (data);
      }
    })
   }



  ngOnInit(): void {
  }

}
