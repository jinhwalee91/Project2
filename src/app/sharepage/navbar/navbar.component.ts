import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';     
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isMenuCollapsed = true;

  
  _userLogin : AuthGuardService ;
  _router : Router;


    
    constructor(private authService: UserService, _userLoginRef : AuthGuardService, private routerRef : Router) {  
      this._userLogin = _userLoginRef    ;
      this._router = routerRef
    }  
  
   exit() {
    window.location.reload();
    localStorage.removeItem('token')
   }

    ngOnInit(): void {                                             
      
    }

  }


