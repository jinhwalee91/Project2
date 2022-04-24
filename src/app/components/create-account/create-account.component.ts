import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})


export class CreateAccountComponent implements OnInit {

   //Property to hold the formGroup
   public signupForm !: FormGroup;


constructor (private formBuilder: FormBuilder,private http: HttpClient,private router: Router) {
 
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
  // i've narrowed the problem down the the post request, i think
  // i tried a json object i built myself, i tried getting rid of all the html and forms entirely and calling signUp fron init
  // and they all give the same error, so it has to be here
  return this.http.post<any>("https://localhost:7274/api/Login/CreateLogin/", this.signupForm.value)
    .subscribe((res: any) => {
      console.log(res);
      this.signupForm.reset();
      this.router.navigate(['login'])
    }, (err: any) => {
      alert("something went wrong");
      console.log(err);
    });
}




  


}


