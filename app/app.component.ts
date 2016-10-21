import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <h1>Meal Tracker</h1>
  <h2>Enter information about meals you eat so you can track them</h2>
  <meal-list
    [meals]="meals"
  ></meal-list>
  `
})

export class AppComponent {
  public meals: Meal[] = [new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 560), new Meal("Fries", "I only ate half of them", 365)];

}
