import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MealListComponent } from './meal-list/meal-list.component';
import { RoutingModule } from './routing/routing.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { StatusFilterComponent } from './status-filter/status-filter.component';
import { LandingComponent } from './landing/landing.component';
import { MealFormComponent } from './meal-form/meal-form.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MealDetailComponent } from './meal-detail/meal-detail.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './header-interceptor';
import { MealNewComponent } from './meal-new/meal-new.component';
import { MealEditComponent } from './meal-edit/meal-edit.component';
import { LoginComponent } from './login/login.component';
import { RoleDirective } from './role.directive';
import { CartComponent } from './cart/cart.component';
import { OrderingsComponent } from './orderings/orderings.component';
import { CartAddComponent } from './cart-add/cart-add.component';
import { MealDeleteComponent } from './meal-delete/meal-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MealListComponent,
    MealFormComponent,
    StatusFilterComponent,
    MealDetailComponent,
    MealNewComponent,
    MealEditComponent,
    LoginComponent,
    RoleDirective,
    CartComponent,
    OrderingsComponent,
    CartAddComponent,
    MealDeleteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,    
    RoutingModule,
    MatButtonToggleModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
