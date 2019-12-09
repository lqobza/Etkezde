import { Injectable } from '@angular/core';
import { Meal } from 'src/domain/meal';
import { Discount } from 'src/domain/discount';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  meals: Meal[] = [];
  
  filteredMeals: Meal[] = this.meals;
  cartMeals: Meal[] = [];

  constructor(
    private http: HttpClient
  ) { }

  async getMeals() {
    const meals = await (this.http.get('meals')
      .toPromise() as Promise<any[]>);
    this.filteredMeals = this.meals = meals.map(this.createMealModel);
  }

  async getMeal(mealId: number): Promise<Meal> {
    const meal = await (this.http.get(`meals/${mealId}`)
      .toPromise() as Promise<any>);
    return this.createMealModel(meal);
  }

  async createMeal(meal: Meal): Promise<any> {
    await this.http.post('meals', meal).toPromise();
  }

  async modifyMeal(meal: Meal): Promise<any> {
    await this.http.patch(`meals/${meal.id}`, meal).toPromise();
  }

  async addToCart(meal: Meal): Promise<any>{
    await this.http.post('cart', meal).toPromise();
  }

  filterChange(filterValue: string) {
    if (typeof filterValue === 'string') {
      if (filterValue === '') {
        this.filteredMeals = this.meals;
      } else {
        this.filteredMeals = this.meals.filter(meal => {
          return meal.discount === filterValue;
        });
      }
    }
  }

  private createMealModel(meal: any): Meal {
    return {
      ...meal
    } as Meal;
  } 
}
