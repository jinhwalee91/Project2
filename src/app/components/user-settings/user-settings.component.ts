import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  public changePasswordForm : any = FormGroup ;
  public changeAvatarForm : any = FormGroup;
   email ! : string;
   password ! : string;
   
   _authService : AuthService;

  constructor (private formBuilder: FormBuilder,private http: HttpClient,private router: Router, _authSerRef : AuthService) {
    this._authService = _authSerRef
   }

  ngOnInit(): void {
    this.changePasswordForm = this.formBuilder.group({
      email: ['',    [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]]
  })

  this.changeAvatarForm = this.formBuilder.group({
    newAvatarLink: ['']
  })
  }

  changePassword(email : any, password: any, newPassword :any){
  this._authService.changePassword(email , password, newPassword).subscribe((data) =>{
    console.log(data);
    alert('password changed successfully');
  }, (err) => {
    console.log(err);
  
  })
  }

  changeAvatar(newAvatarLink :any){
  this._authService.changeAvatar(newAvatarLink).subscribe((data) =>{
    console.log(data);
    alert('avatar changed successfully');
  }, (err) => {
    console.log(err);
  
  })
  }

}
