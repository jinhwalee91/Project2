import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DeleteUserService } from 'src/app/services/delete-user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

_authService : AuthService ;
allUser : any = [];
_deleteUserService: DeleteUserService;

  constructor(_authServiceRef : AuthService, _deleteUserServiceRef : DeleteUserService) 
  {
    this._authService = _authServiceRef ;
    this._deleteUserService = _deleteUserServiceRef ;
   }

showAllUser()
{
this._authService.getAllUsers().subscribe( (data) => {this.allUser = data;
  console.log(this.allUser) 
 })

}

deleteUser(userId: any) {
  this._deleteUserService.deleteUserProfile(userId).subscribe( (data) => {data = data;
    console.log(data) 
   });
   this._deleteUserService.deleteUserLogin(userId).subscribe( (data) => {data = data;
     console.log(data) 
    });
   alert('User #' + userId + ' has been deleted');
}

  ngOnInit(): void {
  }

}
