import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MealListComponent } from "../meal-list/meal-list.component";
import { MealFormComponent } from '../meal-form/meal-form.component';
import { LandingComponent } from '../landing/landing.component'
import { MealDetailComponent } from '../meal-detail/meal-detail.component';
import { MealNewComponent } from '../meal-new/meal-new.component';
import { MealEditComponent } from '../meal-edit/meal-edit.component';
import { LoginComponent } from '../login/login.component';
import { UserRole } from 'src/domain/user-role';
import { RoleGuard } from '../role.guard';
import { CartComponent } from '../cart/cart.component';
import { OrderingsComponent } from '../orderings/orderings.component';
import { CartAddComponent } from '../cart-add/cart-add.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full'
  },
  {
    path: 'meals',
    component: MealListComponent,
    data: {
      roles: [UserRole.Admin,UserRole.User],
    },
    canActivate: [RoleGuard],
  },
  {
    path: 'meals/new',
    component: MealNewComponent,
    data: {
      roles: [UserRole.Admin],
    },
    canActivate: [RoleGuard],
  },
  {
    path: 'meals/:id',
    component: MealDetailComponent,
    data: {
      roles: [UserRole.Admin],
    },
    canActivate: [RoleGuard],
  },
  {
    path: 'meals/:id/edit',
    component: MealEditComponent,
    data: {
      roles: [UserRole.Admin],
    },
    canActivate: [RoleGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      roles: [UserRole.Guest],
    },
    canActivate: [RoleGuard],
  },
  {
    path: 'orderings',
    component: OrderingsComponent,
    data: {
      roles: [UserRole.Guest, UserRole.Admin],
    },
    canActivate: [RoleGuard],
  },
  {
    path: 'cart',
    component: CartComponent,
    data: {
      roles: [UserRole.Admin, UserRole.User],
    },
    canActivate: [RoleGuard],
  },
  {
    path: 'cart/add',
    component: CartAddComponent,
    data: {
      roles: [UserRole.Admin, UserRole.User],
    },
    canActivate: [RoleGuard],
  },
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