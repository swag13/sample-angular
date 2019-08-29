import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ISkills } from './skills';

@Component({
  selector: 'd10x-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  skills : ISkills[];
  dataSource = this.skills;

  constructor() { }

  ngOnInit() {
  }

}
