import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { LoginComponent } from './components/login/login.component';
import { TypingComponent } from './components/typing/typing.component';

const routes: Routes = [
{path : 'login', component : LoginComponent},
{path : 'createAccount', component : CreateAccountComponent},
{path:"practice", component:TypingComponent}
<<<<<<< HEAD

=======
>>>>>>> ee4bbb269e2697af51d7feafa164ee9b7506f007
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
