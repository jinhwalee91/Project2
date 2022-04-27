import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  _userLogin : AuthGuardService ;

  constructor(_userLoginRef : AuthGuardService) {
    this._userLogin = _userLoginRef    ; }



    
  ngOnInit(): void {
  }

}
