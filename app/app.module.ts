import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { MealListComponent } from './meal-list.component';
import { MealDisplayComponent } from './meal-display.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [ AppComponent, MealListComponent, MealDisplayComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
