import { Component, Output, EventEmitter} from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'add-meal',
  template: `
    <div>
      <h3>Add a Meal</h3>
      <label for="name">Name:</label>
      <input id="name" type="text" #inputName>
      <label for="details">Details:</label>
      <input id="details" type="text" #inputDetails>
      <label for="calories">Calories:</label>
      <input id="calories" type="number" #inputCalories>
      <button (click)="createMeal(inputName.value, inputDetails.value, inputCalories.value);
      inputName.value='';
      inputDetails.value='';
      inputCalories.value='';" type="button">Add</button>
    </div>
  `
})

export class AddMealComponent {
  @Output() newMealSender = new EventEmitter();
  createMeal(name, details, calories) {
    var newMeal = new Meal(name, details, calories);
    this.newMealSender.emit(newMeal);
  }
}
