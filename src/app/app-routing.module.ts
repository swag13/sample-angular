import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { McqComponent } from './evaluation/mcq.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes : Routes = [
  {path : '', redirectTo:'/welcome', pathMatch:'full'},
  {path : 'welcome', component: WelcomeComponent},
  {path : 'welcome/:skill/:level', component: McqComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [WelcomeComponent, McqComponent]
