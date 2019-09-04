import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {timer, Subscription} from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/observable/timer';
import { McqService } from './mcq.service';

@Component({
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.css']
})
export class McqComponent implements OnInit {
  public skill : string;
  public level : string;

  constructor(private route : ActivatedRoute, private mcqService : McqService, private httpClient : HttpClient) { }
  count;
  countDown;
  sub : Subscription;
  url : string = "http://localhost:8080/welcome/skill/{skill}/level/{level}";


  ngOnInit() {
    let skill = this.route.snapshot.paramMap.get('skill');
    let level = this.route.snapshot.paramMap.get('level');
    this.skill = skill;
    this.level = level;
    console.log(skill);
    console.log(level);
    //this.evalTimer();

    this.mcqService.seconds = 0;
    this.mcqService.qProgress = 0;
   /*  this.mcqService.getQuestions().subscribe(
      (data : any) => {
        this.mcqService.questions = data; */
       // this.startTimer();
      
    this.httpClient.get(this.createUrl(this.url), {responseType : 'text'}).subscribe(
      data => {
        this.mcqService.questions[0] = data;
        alert("Success "+data);
     },
     error => {
       console.log (error);
       alert("Error "+error);
     }
    );
      }
    ////)
    
  createUrl(url : string) : string {
    url = url.replace("{skill}",btoa(this.skill));
    url = url.replace("{level}",btoa(this.level));
    return url;
  }

  startTimer() : void {
    this.mcqService.timer = setInterval(() => {
    this.mcqService.seconds++;
    }, 1000);
  }
  
Answer(qID, choice){
  
}
}
