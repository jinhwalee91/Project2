import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],


  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
