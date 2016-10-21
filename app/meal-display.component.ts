import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  template: `
  <div class="meal-card">
    <h4>{{meal.name}}
      <button (click)="editMeal(meal)">Edit</button>
    </h4>
    <p>{{meal.details}}</p>
    <p>{{meal.calories}}</p>
  </div>
  `
})

export class MealDisplayComponent {
  @Input() meal: Meal;
  @Output() editMealEvent = new EventEmitter();
  editMeal(meal){
    this.editMealEvent.emit(meal);
  }
}
