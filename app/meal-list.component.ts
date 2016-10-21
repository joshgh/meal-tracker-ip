import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <h3>Meals</h3>
  <p>Total Calories: {{ totalCalories }}</p>
  <p>Average Calories: {{ avgCalories }}</p>
  <label for='select-calories'>Filter by calorie level:</label>
  <select (change)="setFilter($event.target.value)" name='select-calories' id='select-calories'>
    <option value="all">All</option>
    <option value="low">Low Calories</option>
    <option value="high">High Calories</option>
  </select>
  <meal-display *ngFor="let meal of meals | caloriesFilter:calorieDisplay"
    [meal]="meal"
    (editMealEvent)="editMeal($event)"
  ></meal-display>
  `
})

export class MealListComponent {
  @Input() meals: Meal[];
  @Input() totalCalories: number;
  @Input() avgCalories: number;
  @Output() editMealEvent = new EventEmitter();
  public calorieDisplay: string = "all"
  setFilter(value){
    this.calorieDisplay = value;
  }
  editMeal(meal){
    this.editMealEvent.emit(meal);
  }
}
