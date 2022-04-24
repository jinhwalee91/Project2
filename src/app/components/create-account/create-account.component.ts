import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Users } from 'src/app/models/Users';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})


export class CreateAccountComponent implements OnInit {

   //Property to hold the formGroup
   public signupForm !: FormGroup;
_singup : AuthService

/*
data : any = {
  signupForm : this.formBuilder.group({
    firstname : [''] ,
    lastname : [''] ,
    email : [''],
    password : [''],
    gender : [''],
  })

}
*/
firstname !: string
lastname ! : string 
email ! : string
password ! : string
gender ! : string



constructor (private formBuilder: FormBuilder,private http: HttpClient,private router: Router, 
_signupRef :AuthService ) {
this._singup = _signupRef
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


signUp() {
  this.http.post<any>("https://localhost:7274/api/Login/CreateLogin?firstName=" + this.firstname + "&lastName=" + this.lastname + "&email=" + this.email + "&password=" + this.password +"&gender=" + this.gender, this.signupForm.value)
    .subscribe((res: any) => {
      this.signupForm.reset();
      this.router.navigate(['login'])
    }, (err: any) => {
      alert("something went wrong");
    });
}


/*
signUp(data : any){
this._singup.userSignup(data).subscribe( (data)=> {
  if(data == null) {
    console.log('Signed up failed');
  }
  else {
    this._singup.signupDetail = data ; 
    console.log('Sign up success');
    this.router.navigateByUrl("/login");
  }
} )
}
*/


/*
signUp() {

  let url = "https://localhost:7274/api/Login/CreateLogin" 

  this.http.post(url, {
    firstname : this.firstname,
    lastname : this.lastname,
    email : this.email,
    password : this.password,
    gender : this.gender

  }).toPromise().then((data : any)=> {
    console.log(data)
  })
}

*/



}


