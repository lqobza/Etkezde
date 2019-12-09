import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/domain/meal';
import { MealService } from '../meal.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meal-edit',
  templateUrl: './meal-edit.component.html',
  styleUrls: ['./meal-edit.component.css']
})
export class MealEditComponent implements OnInit {

  meal: Meal;

  constructor(
    private mealService: MealService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    const mealId = parseInt(
      this.route.snapshot.params.id);
    this.meal = await this.mealService.getMeal(mealId);
  }

  async submitMeal(meal: Meal) {
    meal.id = this.meal.id;
    await this.mealService.modifyMeal(meal);
    this.router.navigate(['/', 'meals']);
  }
}
