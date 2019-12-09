import { Component, OnInit } from "@angular/core";
import { Meal } from "src/domain/meal";
import { ActivatedRoute, Router } from "@angular/router";
import { MealService } from "../meal.service";
import { UserRole } from 'src/domain/user-role';

@Component({
  selector: "app-meal-detail",
  templateUrl: "./meal-detail.component.html",
  styleUrls: ["./meal-detail.component.css"]
})
export class MealDetailComponent implements OnInit {
  UserRole = UserRole;
  meal: Meal;

  constructor(
    private route: ActivatedRoute,
    private mealService: MealService,
    private router: Router
  ) { }

  async ngOnInit() {
    const mealId = parseInt(this.route.snapshot.params.id);
    this.meal=await this.mealService.getMeal(mealId);
  }
  editMeal() {
    this.router.navigate([
      "meals", this.meal.id, "edit"]);
  }

}
