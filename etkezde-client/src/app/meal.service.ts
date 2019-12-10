import { Injectable } from '@angular/core';
import { Meal } from 'src/domain/meal';
import { Cart } from 'src/domain/cart';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/domain/user';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  meals: Meal[] = [];
  
  filteredMeals: Meal[] = this.meals;
  cart: Cart;

  constructor(
    private http: HttpClient
  ) { }

  async getMeals() {
    const meals = await (this.http.get(`meals`)
      .toPromise() as Promise<any[]>);
    this.filteredMeals = this.meals = meals.map(this.createMealModel);
  }

  async getMeal(mealId: number): Promise<Meal> {
    const meal = await (this.http.get(`meals/${mealId}`)
      .toPromise() as Promise<any>);
    return this.createMealModel(meal);
  }

  async createMeal(meal: Meal): Promise<any> {
    await this.http.post(`meals`, meal).toPromise();
  }

  async modifyMeal(meal: Meal): Promise<any> {
    await this.http.patch(`meals/${meal.id}`, meal).toPromise();
  }

  async deleteMeal(meal: Meal): Promise<any> {
    await this.http.delete(`meals/${meal.id}`).toPromise();
  }

  async getCart(user: User) {
    const cart = await (this.http.get(`cart/${user.username}`).toPromise() as Promise<Meal[]>);
    console.log(cart);
    this.cart.meals=cart.map(this.createMealModel);
  }

  async addToCart(user: User, meal: Meal): Promise<any>{
    await this.http.post(`cart/${user.username}`, meal).toPromise();
  }

  async removeFromCart(meal: Meal): Promise<any>{
    await this.http.delete(`cart/${meal.id}`).toPromise();
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
  private createCartModel(cart: any): Cart {
    return {
      ...cart
    } as Cart;
  }
}
