import { Component, OnInit, Input } from '@angular/core';
import { Meal } from 'src/domain/meal';
import { MealService } from '../meal.service';
import { User } from 'src/domain/user';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() meal: Meal;
  @Input() user: User;
  
  constructor(
    public mealService: MealService
  ) { }
  
  cart: Meal[] = [];

  async ngOnInit() {
    await this.mealService.getCart(this.user);
  }

  async removeFromCart(){
    await this.mealService.removeFromCart(this.meal);
  }
}
