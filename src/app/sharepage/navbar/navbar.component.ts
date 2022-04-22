import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';      // added for making disappear sign out sign when log in
import { BehaviorSubject } from 'rxjs';    // added for making disappear sign out sign when log in

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isMenuCollapsed = true;
  

  signedIn$: BehaviorSubject<boolean>   // added for making disappear sign out sign when log in
  
    
    constructor(private authService: UserService) {  // added for making disappear sign out sign when log in
      this.signedIn$ = this.authService.signedIn$    // added for making disappear sign out sign when log in
    }  
  
    ngOnInit(): void {                                              // added for making disappear sign out sign when log in
      this.authService.signedIn().subscribe(()=>{})                // added for making disappear sign out sign when log in
    }

  }

/*

  constructor() { }

  ngOnInit(): void {
  }

}

*/
