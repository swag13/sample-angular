import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormControlDirective, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { StarComponent } from './shared/star.component';
import { McqComponent } from './evaluation/mcq.component';
import {MatTableModule} from '@angular/material/table';
import { WelcomeComponent } from './welcome/welcome.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CountdownTimerModule} from 'ngx-countdown-timer';
import {MatCardModule} from '@angular/material/card';
//import {SelectionModel} from '@angular/cdk/collections';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    EvaluationComponent,
    StarComponent,
    McqComponent,
    WelcomeComponent,
    LoginComponent
  ],
  imports: [
    CountdownTimerModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatRadioModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent},
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
