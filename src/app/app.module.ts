import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { StarComponent } from './shared/star.component';
import { McqComponent } from './evaluation/mcq.component';

@NgModule({
  declarations: [
    AppComponent,
    EvaluationComponent,
    StarComponent,
    McqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'welcome', component: McqComponent},
      { path: 'skill', component: EvaluationComponent },
      { path: 'mcq', component: McqComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
