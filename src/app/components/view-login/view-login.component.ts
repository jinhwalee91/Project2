import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-view-login',
  templateUrl: './view-login.component.html',
  styleUrls: ['./view-login.component.css']
})
export class ViewLoginComponent implements OnInit {

  _loginService: LoginService;
  loginDetail:any =[];

  constructor(_loginServiceRef: LoginService)
  {
    this._loginService = _loginServiceRef;
  }

  showAllLogins() {
    this._loginService.getAllLogin().subscribe((data) => {
      this.loginDetail = data;
      console.log(this.loginDetail);
    })
  }

  ngOnInit(): void {
  }

}
