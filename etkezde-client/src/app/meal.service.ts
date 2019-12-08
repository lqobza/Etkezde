import { Injectable } from '@angular/core';
import { Meal } from 'src/domain/meal';
import { Discount } from 'src/domain/discount';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  meals: Meal[] = [
    {
      id: 1,
      name: 'Kaja1',
      description: 'Kaja1 description',
      discount: Discount.Normalprice,
      ratings: 'jo',
      price: 1599,
    },
    {
      id: 2,
      name: 'Kaja2',
      description: 'Kaja2 description',
      discount: Discount.Discount,
      ratings: 'nem jo',
      price: 2599,
    },
  ];

  filteredMeals: Meal[] = this.meals;


  constructor() { }

  filterChange(filterValue: string) {
    if (typeof filterValue === 'string') {
      if (filterValue === '') {
        this.filteredMeals = this.meals;
      } else {
        // Lehet ciklussal is :)
        this.filteredMeals= this.meals.filter(meal => {
          return meal.discount === filterValue;
        });
      }
    }
  }

}
