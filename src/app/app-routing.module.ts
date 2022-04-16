import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypingComponent } from './components/typing/typing.component';

const routes: Routes = [
  {path:"practice", component:TypingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
