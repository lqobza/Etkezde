import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from 'src/domain/meal';
import { Discount } from 'src/domain/discount';
import { FormGroup } from '@angular/forms';
import { MealService } from '../meal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent implements OnInit {

  @Input() mode: 'create' | 'edit';
  @Input() meal: Meal;
  @Output() mealSubmit: EventEmitter<Meal> = new EventEmitter();

  discounts = [{
    label: 'Discount',
    value: 'DISCOUNT',
  }, {
    label: 'Normal price',
    value: 'NORMALPRICE',
  }]

  constructor() { }

  ngOnInit() {}

  async submitMeal(form: FormGroup) {
    if (!form.valid) {
      return;
    }
    this.mealSubmit.emit(form.getRawValue() as Meal);
  }
}
