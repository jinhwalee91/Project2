import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

_authService : AuthService ;
allUser : any = [];

  constructor(_authServiceRef : AuthService) 
  {
    this._authService = _authServiceRef ;
   }

showAllUser()
{
this._authService.getAllUsers().subscribe( (data) => {this.allUser = data;
  console.log(this.allUser) 
 })

}

  ngOnInit(): void {
  }

}
