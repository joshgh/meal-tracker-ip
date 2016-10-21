import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <h3>Meals</h3>
  <label for='select-calories'>Show meals with:</label>
  <select (change)="setFilter($event.target.value)" name='select-calories' id='select-calories'>
    <option value="all">All</option>
    <option value="low">Low Calories</option>
    <option value="high">High Calories</option>
  </select>
  <meal-display *ngFor="let meal of meals | caloriesFilter:calorieDisplay"
    [meal]="meal"
  ></meal-display>
  `
})

export class MealListComponent {
  @Input() meals: Meal[];
  public calorieDisplay: string = "all"
  setFilter(value){
    this.calorieDisplay = value;
  }
}
