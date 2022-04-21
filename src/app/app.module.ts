import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TypingComponent } from './components/typing/typing.component';
import { LoginService } from './services/login.service';
import { ViewLoginComponent } from './components/view-login/view-login.component';


@NgModule({
  declarations: [
    AppComponent,
    TypingComponent,
    LoginComponent,
    CreateAccountComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LeaderboardComponent,
    UserProfileComponent,
    ViewLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],


  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
