import { Component, OnInit } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>Meal Tracker</h1>
      <h2>Keep track of your meals throughout the day</h2>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <meal-list
          [meals]="meals"
          [totalCalories]="totalCalories"
          [avgCalories]="avgCalories"
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

export class AppComponent implements OnInit{
  public addMealForm: boolean = false;
  public totalCalories: number;
  public avgCalories: number;
  public meals: Meal[] = [new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 600), new Meal("Fries", "I only ate half of them", 400)];
  public selectedMeal: Meal = null;

  ngOnInit(){
    this.updateCalories();
  }

  calculateTotal(){
    this.totalCalories = 0;
    for(var i = 0; i < this.meals.length; i++){
      this.totalCalories+= this.meals[i].calories;
    }
    return this.totalCalories;
  }

  calculateAvg(){
    if(this.meals){
      this.avgCalories = Math.round(this.calculateTotal() / this.meals.length);
    } else {
      this.avgCalories = 0;
    }
  }

  updateCalories(){
    this.calculateTotal();
    this.calculateAvg();
  }

  addMeal(meal: Meal){
    this.meals.push(meal);
    this.toggleNewMeal();
    this.updateCalories();
  }

  toggleNewMeal(){
    this.addMealForm = !this.addMealForm;
  }

  selectMeal(meal){
    this.selectedMeal = meal;
  }

  doneEditing(){
    this.selectedMeal = null;
    this.updateCalories();
  }
}
