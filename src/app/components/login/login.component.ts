import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


 greetUser(){
   alert ('Welcome to Typing Competiton')
 } 


  constructor() { }

  ngOnInit(): void {
  }

}
