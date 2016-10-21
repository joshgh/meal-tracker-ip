import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <h3>Meals</h3>
  <meal-display *ngFor="let meal of meals"
    [meal]="meal"
  ></meal-display>
  `
})

export class MealListComponent {
  @Input() meals: Meal[];
}
