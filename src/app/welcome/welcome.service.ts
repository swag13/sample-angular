import { Injectable } from '@angular/core';
import { ISkills } from './skills';

@Injectable({
    providedIn : 'root'
})
export class WelcomeService {
  skills : ISkills[] =
  [
    {skill: 'Java', score: 20, level: 'Expert', evaluate:'Evaluate'},
    {skill: 'Java 8', score: 10, level: 'Begineer', evaluate:'Evaluate'},
    {skill: 'Python', score: 12, level: 'Intermediate', evaluate:'Evaluate'},
    {skill: 'Kotlin', score: 15, level: 'Expert', evaluate:'Evaluate'},
    {skill: 'PL/SQL', score: 20, level: 'Expert', evaluate:'Evaluate'},
    {skill: 'Angular 7', score: 10, level: 'Begineer', evaluate:'Evaluate'},
    {skill: 'AI', score: 12, level: 'Intermediate', evaluate:'Evaluate'},
    {skill: 'ML', score: 15, level: 'Expert', evaluate:'Evaluate'},
  ];
    getProducts() : ISkills[] {
      return this.skills;
    }
}