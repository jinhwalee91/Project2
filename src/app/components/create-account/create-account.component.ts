import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  /*
  registrationGroup: FormGroup



  constructor(private formBuilder: FormBuilder) {

    this.registrationGroup = this.formBuilder.group({
      firstName: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)
      ]],
      lastName: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)
      ]],
      email: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)
      ]],
      passwordconfirm: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)
      ]]
    })


   }

   */ 

   
  ngOnInit(): void {
  }

}






