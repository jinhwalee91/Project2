import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TypingComponent } from './components/typing/typing.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ViewLoginComponent } from  './components/view-login/view-login.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminGuardService } from './services/admin-guard.service';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
{path : '' , component: HomeComponent},
{path:"home", component:HomeComponent},
  { path: 'login', component: LoginComponent }, 
  { path: 'createAccount', component : CreateAccountComponent},
  { path: "practice", component: TypingComponent, canActivate : [AuthGuardService] },
  { path: "leaderboard", component: LeaderboardComponent },
  { path: "userProfile", component: UserProfileComponent },
  { path: "ViewLogin", component: ViewLoginComponent},
  { path: "admin", canLoad: [AdminGuardService],
    loadChildren: () => import('./module/auth/auth.module').then(x => x.AuthModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
