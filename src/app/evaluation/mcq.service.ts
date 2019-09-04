import { Injectable } from '@angular/core';

@Injectable({
    providedIn : 'root'
})
export class McqService {
    questions: any[];
    seconds : number;
    timer;
    qProgress : number;
    qTimer: number;
}