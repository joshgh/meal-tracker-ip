import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { MealListComponent } from './meal-list.component';
import { MealDisplayComponent } from './meal-display.component';
import { CaloriesFilterPipe } from './calories-filter.pipe';

@NgModule({
  imports: [BrowserModule],
  declarations: [ AppComponent, MealListComponent, MealDisplayComponent, CaloriesFilterPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
