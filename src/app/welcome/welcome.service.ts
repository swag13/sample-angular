import { Injectable } from '@angular/core';
import { ISkills } from './skills';

@Injectable({
    providedIn : 'root'
})
export class WelcomeService {
  skills : ISkills[] =
  [
    {skill: 'Java', score: 20, level: 'Expert'},
    {skill: 'Java 8', score: 10, level: 'Begineer'},
    {skill: 'Python', score: 12, level: 'Intermediate'},
    {skill: 'Kotlin', score: 15, level: 'Expert'},
    {skill: 'PL/SQL', score: 20, level: 'Expert'},
    {skill: 'Angular 7', score: 10, level: 'Begineer'},
    {skill: 'AI', score: 12, level: 'Intermediate'},
    {skill: 'ML', score: 15, level: 'Expert'},
  ];
    getProducts() : ISkills[] {
      return this.skills;
    }
}