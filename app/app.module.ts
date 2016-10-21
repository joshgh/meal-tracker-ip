import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { MealListComponent } from './meal-list.component';
import { MealDisplayComponent } from './meal-display.component';
import { AddMealComponent } from './add-meal.component';
import { EditMealComponent} from './edit-meal.component';
import { CaloriesFilterPipe } from './calories-filter.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule ],
  declarations: [ AppComponent, MealListComponent, MealDisplayComponent, AddMealComponent, EditMealComponent, CaloriesFilterPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
