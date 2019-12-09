import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/domain/meal';
import { Rating } from 'src/domain/rating';
import { MealService } from '../meal.service';
import { Router } from '@angular/router';
import { Discount } from 'src/domain/discount';

@Component({
  selector: 'app-meal-new',
  templateUrl: './meal-new.component.html',
  styleUrls: ['./meal-new.component.css']
})
export class MealNewComponent implements OnInit {

  meal: Meal;

  constructor(
    private mealService: MealService,
    private router: Router
  ) {}

  ngOnInit() {
    this.meal = {
      id: null,
      name: '',
      description: '',
      discount: 'NORMALPRICE' as Discount,
      ratings: null,
      price: 0,
    };
  }

  async submitMeal(meal: Meal){
    await this.mealService.createMeal(meal);
    this.router.navigate(['/','meals']);
  }
}
