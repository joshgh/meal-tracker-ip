import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div>
      <h3>Edit Meal</h3>
      <label for="edit-name">Name:</label>
      <input [(ngModel)]="mealToEdit.name">
      <label for="edit-details">Details:</label>
      <input [(ngModel)]="mealToEdit.details">
      <label for="edit-calories">Calories:</label>
      <input type="number" [(ngModel)]="mealToEdit.calories">
      <button (click)="doneEditing()" type="button">Done</button>
    </div>
  `
})

export class EditMealComponent {
  @Input() mealToEdit: Meal;
  @Output() doneEditSender = new EventEmitter();
  doneEditing(){
    this.doneEditSender.emit();
  }
}
