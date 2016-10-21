import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <h1>Meal Tracker</h1>
  <h2>Enter information about meals you eat so you can track them</h2>
  <meal-list
    [meals]="meals"
    (editMealEvent)="selectMeal($event)"
  ></meal-list>
  <button (click)="toggleNewMeal()">Add Meal</button>
  <add-meal *ngIf="addMealForm"
    (newMealSender)="addMeal($event)"
  ></add-meal>
  <edit-meal *ngIf="selectedMeal"
    [mealToEdit]="selectedMeal"
    (doneEditSender)="doneEditing()"
  ></edit-meal>
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
