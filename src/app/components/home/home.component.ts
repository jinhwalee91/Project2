import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  _userLogin : AuthGuardService ;

  constructor(_userLoginRef : AuthGuardService) 
  {
    this._userLogin = _userLoginRef
   }


  ngOnInit(): void {
  }

}
