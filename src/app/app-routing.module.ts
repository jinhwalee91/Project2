import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
{path : 'login', component : LoginComponent},
{path : 'createAccount', component : CreateAccountComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
