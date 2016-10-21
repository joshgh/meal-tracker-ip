import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <h3>Meals</h3>
  <div *ngFor="let meal of meals">
    <h4>{{meal.name}}</h4>
    <p>{{meal.details}}</p>
    <p>{{meal.calories}}</p>
  </div>
  `
})

export class MealListComponent {
  @Input() meals: Meal[];
}
