import { Component, OnInit, Input } from '@angular/core';
import { Meal } from 'src/domain/meal';
import { MealService } from '../meal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meal-delete',
  templateUrl: './meal-delete.component.html',
  styleUrls: ['./meal-delete.component.css']
})
export class MealDeleteComponent implements OnInit {

  @Input() meal: Meal;
  
  constructor(
    private mealService: MealService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  async deleteMeal(){
    await this.mealService.deleteMeal(this.meal);
    this.mealService.getMeals();
    //this.router.navigate(['/', 'meals']);
  }

}
