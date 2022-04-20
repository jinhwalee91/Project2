import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from 'src/app/components/login/login.component';
import { CreateAccountComponent } from 'src/app/components/create-account/create-account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthroutingModule } from './authrouting.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthroutingModule
    
  ]
})
export class AuthModule { }
