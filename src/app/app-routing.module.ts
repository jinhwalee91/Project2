import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TypingComponent } from './components/typing/typing.component';

const routes: Routes = [
{path : '' , component: HomeComponent},
{path:"home", component:HomeComponent},
{path : 'login', component : LoginComponent, children: [
  {path : 'createAccount', component : CreateAccountComponent}
]},
{path : 'createAccount', component : CreateAccountComponent},
{path:"practice", component:TypingComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
