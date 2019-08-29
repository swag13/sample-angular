import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { ISkills } from './skills';
import { WelcomeService } from './welcome.service';

@Component({
  selector: 'd10x-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {

  skills : ISkills[] ;

  dataSource : any;
  displayedColumns = ['skill', 'score', 'level', 'evaluate'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private welcomeService : WelcomeService ) {
  
  }

  ngOnInit() {
    this.skills = this.welcomeService.getProducts();
    this.dataSource = new MatTableDataSource<ISkills>(this.skills);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
