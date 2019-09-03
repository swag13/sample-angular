import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {timer, Subscription} from 'rxjs';
import 'rxjs/add/observable/timer';

@Component({
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.css']
})
export class McqComponent implements OnInit {
  public skill : string;
  public level : string;
  constructor(private route : ActivatedRoute) { }
  count;
  countDown;
  sub : Subscription;


  ngOnInit() {
    let skill = this.route.snapshot.paramMap.get('skill');
    let level = this.route.snapshot.paramMap.get('level');
    this.skill = skill;
    this.level = level;
    console.log(skill);
    console.log(level);
    this.evalTimer();
  }
  evalTimer() {
    this.count = 20
    this.countDown = timer(0,1000).subscribe(x => {
      this.count = this.count - 1;
    })
  }

}
