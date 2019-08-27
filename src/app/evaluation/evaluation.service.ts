import { Injectable } from '@angular/core';
import { ISkill } from './skill';

@Injectable({
    providedIn : 'root'
})
export class EvaluationService {

    getProducts() : ISkill[] {
        return [
            {
              "skillId": 1,
              "skillName": "Java",
              "skillCode": "GDN-0011",
              "releaseDate": "March 19, 2019",
              "description": "Leaf rake with 48-inch wooden handle.",
              "price": 19,
              "starRating": 3.2,
              "imageUrl": "assets/images/leaf_rake.png"
            },
            {
              "skillId": 2,
              "skillName": "Java 8",
              "skillCode": "GDN-0023",
              "releaseDate": "March 18, 2019",
              "description": "15 gallon capacity rolling garden cart",
              "price": 20,
              "starRating": 4.2,
              "imageUrl": "assets/images/garden_cart.png"
            },
            {
              "skillId": 5,
              "skillName": "Angular7",
              "skillCode": "TBX-0048",
              "releaseDate": "May 21, 2019",
              "description": "Curved claw steel hammer",
              "price": 13,
              "starRating": 4.8,
              "imageUrl": "assets/images/hammer.png"
            },
            {
              "skillId": 8,
              "skillName": "Python",
              "skillCode": "TBX-0022",
              "releaseDate": "May 15, 2019",
              "description": "15-inch steel blade hand saw",
              "price": 11,
              "starRating": 3.7,
              "imageUrl": "assets/images/saw.png"
            },
            {
              "skillId": 10,
              "skillName": "Video Game Controller",
              "skillCode": "GMG-0042",
              "releaseDate": "October 15, 2018",
              "description": "Standard two-button video game controller",
              "price": 35.95,
              "starRating": 4.6,
              "imageUrl": "assets/images/xbox-controller.png"
            }
          ]
    }
}