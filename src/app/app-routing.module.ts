import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TypingComponent } from './components/typing/typing.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
{path : '' , component: HomeComponent},
{path:"home", component:HomeComponent},
{path : 'login', component : LoginComponent, children: [
  {path : 'createAccount', component : CreateAccountComponent}
]},
{path : 'createAccount', component : CreateAccountComponent},
  { path: "practice", component: TypingComponent },
  { path: "leaderboard", component: LeaderboardComponent },
  { path: "userProfile", component: UserProfileComponent },
  { path: "admin", component: AdminComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
