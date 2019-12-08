import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MealListComponent } from "../meal-list/meal-list.component";
import { MealFormComponent } from '../meal-form/meal-form.component';
import { LandingComponent } from '../landing/landing.component'
//import { MealDetailComponent } from '../meal-detail/meal-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full'
  },
  {
    path: 'meals',
    component: MealListComponent
  },
  {
    path: 'meals/new',
    component: MealFormComponent
  },
  /* {
    path: 'meals/:id',
    component: MealDetailComponent
  }, */
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }