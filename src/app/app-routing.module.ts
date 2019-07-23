import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './category/restaurant/restaurant.component';
import { CafeComponent } from './category/cafe/cafe.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'restaurant',
    component : RestaurantComponent
  },
  {
    path : 'cafe',
    component : CafeComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'signUp',
    component : SignupComponent
  },
  {
    path : 'admin',
    component : AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
