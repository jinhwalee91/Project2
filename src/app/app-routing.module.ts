import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
{path : 'login', component : LoginComponent},
{path : 'createAccount', component : CreateAccountComponent}

=======
import { TypingComponent } from './components/typing/typing.component';

const routes: Routes = [
  {path:"practice", component:TypingComponent}
>>>>>>> 6f6da1f599112b5c4d0aa010afebf1bcb01b5caa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
