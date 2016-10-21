import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  template: `
  <div>
    <h4>{{meal.name}}</h4>
    <p>{{meal.details}}</p>
    <p>{{meal.calories}}</p>
  </div>
  `
})

export class MealDisplayComponent {
  @Input() meal: Meal;
}
