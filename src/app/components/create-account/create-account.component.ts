import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})


export class CreateAccountComponent implements OnInit {

   //Property to hold the formGroup
   // public signupForm !: FormGroup;

   public signupForm : any = FormGroup 
  

    firstname !: string
    lastname ! : string 
    email ! : string
    password ! : string
    gender ! : string
    
    _authService : AuthService

constructor (private formBuilder: FormBuilder,private http: HttpClient,private router: Router, _authSerRef : AuthService) {
 this._authService = _authSerRef
}

   
ngOnInit(): void {
  //Initialize the form
  this.signupForm = this.formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['',  Validators.required],
    email: ['',    [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    gender: ['', Validators.required]
})


}


signUp(firstname : any, lastname: any, email :any, password : any, gender : any){
this._authService.createAccount(firstname , lastname, email, password, gender).subscribe((data) =>{
  console.log(data);
  this.router.navigate(['login'])
}, (err) => {
  console.log(err);

})
}
  


}


