import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <h2>Keep track of your meals throughout the day</h2>
    <div class="row">
      <div class="col-sm-6">
        <meal-list
          [meals]="meals"
          (editMealEvent)="selectMeal($event)"
        ></meal-list>
        <button (click)="toggleNewMeal()">Add Meal</button>
        <add-meal *ngIf="addMealForm"
          (newMealSender)="addMeal($event)"
        ></add-meal>
      </div>
      <div class="col-sm-6">
        <edit-meal *ngIf="selectedMeal"
          [mealToEdit]="selectedMeal"
          (doneEditSender)="doneEditing()"
        ></edit-meal>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public addMealForm: boolean = false;
  public meals: Meal[] = [new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 560), new Meal("Fries", "I only ate half of them", 365)];
  public selectedMeal: Meal = null;
  addMeal(meal: Meal){
    this.meals.push(meal);
    this.toggleNewMeal();
  }
  toggleNewMeal(){
    this.addMealForm = !this.addMealForm;
  }
  selectMeal(meal){
    this.selectedMeal = meal;
  }
  doneEditing(){
    this.selectedMeal = null;
  }
}
