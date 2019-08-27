import { Component, OnInit } from '@angular/core';
import { ISkill } from './skill';
import { EvaluationService } from './evaluation.service';

@Component({
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {
  
 pageTitle : string = "Self Evaluation";
 showImage : boolean = false;
 
 _listFilter : string;
 get listFilter() : string {
   return this._listFilter;
 }
 set listFilter(value:string){
   this._listFilter = value;
   this.filteredSkills = this.listFilter ? this.performFilter(this.listFilter): this.skills;
 }

 filteredSkills : ISkill[];
 skills : ISkill[];

performFilter(filterBy: string): ISkill[] {
  filterBy = filterBy.toLocaleLowerCase();
  return this.skills.filter((skill : ISkill) => 
  skill.skillName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}
  constructor(private evaluationService : EvaluationService ) {
    
   }

  ngOnInit() {
    this.skills = this.evaluationService.getProducts();
    this.filteredSkills = this.skills;
  }

  toggleImage(): void {
    this.showImage = this.showImage;
  }

  onRatingClicked(message: string) : void {
    this.pageTitle = `Self Evaluation :` + message;
 }
}
