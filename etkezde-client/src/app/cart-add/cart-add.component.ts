import { Component, OnInit, Input } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { MealService } from '../meal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Meal } from 'src/domain/meal';
import { User } from 'src/domain/user';

@Component({
  selector: 'app-cart-add',
  templateUrl: './cart-add.component.html',
  styleUrls: ['./cart-add.component.css']
})
export class CartAddComponent implements OnInit {

  @Input() meal: Meal;
  @Input() user: User;

  constructor(
    private mealService: MealService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  async addToCart(){
    console.log(this.meal);
    await this.mealService.addToCart(this.user, this.meal);
    this.router.navigate(['/', 'meals']);
  }
}
