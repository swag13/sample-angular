import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { ISkills } from './skills';
import { WelcomeService } from './welcome.service';
import { Router} from "@angular/router";
import {SelectionModel} from '@angular/cdk/collections';
import {NgControl} from "@angular/forms";
import { McqComponent } from '../evaluation/mcq.component';

@Component({
  selector: 'd10x-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {

  skills : ISkills[] ;

  dataSource : any;
  displayedColumns = ['select', 'skill', 'score', 'level'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private welcomeService : WelcomeService,  private router: Router) {
    
  }

  ngOnInit() {
    this.skills = this.welcomeService.getProducts();
    this.dataSource = new MatTableDataSource<ISkills>(this.skills);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  gotoEvaluation(select : any) {
     this.router.navigate(['/welcome', select.skill, select.level]);/*  .then( (e) => {
      if (e) {
        console.log(select.skill, select.level);
      } else {
        console.log("Navigation has failed!");
      }
    });   */
  }
 selectedRow : ISkills[];
 selectedSkill : string;
 selectedLevel : string;

initialSelection : any[]= [];
allowMultiSelect : boolean = false;
selectionRow = new SelectionModel<ISkills>(this.allowMultiSelect, this.initialSelection);

 /* onRowClicked(row : any[]) {
    for (let entry of row) {
      console.log(entry);
    } 
  } */
}