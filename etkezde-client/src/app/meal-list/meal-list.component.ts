import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/domain/meal';
import { Discount } from 'src/domain/discount';
import { MealService } from '../meal.service';

@Component({
  selector: 'meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {
  constructor(
    public mealService: MealService
  ) { }

  ngOnInit() { 
    this.mealService.getMeals();
  }
}
