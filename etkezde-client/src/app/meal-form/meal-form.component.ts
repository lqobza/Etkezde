import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/domain/meal';
import { Discount } from 'src/domain/discount';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent implements OnInit {

  discounts = [{
    label: 'Discount',
    value: 'DISCOUNT',
  }, {
    label: 'Normal price',
    value: 'NORMALPRICE',
  }]

  meal: Meal;

  constructor(
  ) { }

  ngOnInit() {
    this.meal = {
      id: null,
      name: '',
      description: '',
      discount: 'NORMALPRICE' as Discount,
      ratings: '',
      price: 0,
    };
  }

  submitMeal(form: FormGroup) {
    if (!form.valid) {
      return;
    }
    console.log(this.meal);
  }

}
