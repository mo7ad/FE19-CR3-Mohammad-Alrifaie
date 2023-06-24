import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CartComponent } from './components/cart/cart.component';
import { DetailsComponent } from './components/details/details.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {
    path:"home",component:HomeComponent
  },{
          path:"",component:HomeComponent
  },{
    path:"about-us",component:AboutUsComponent
  },{
    path:"cart",component:CartComponent
  },{
    path:"product/:indexFromRouting",component:DetailsComponent
  },{
    path:"menu",component:MenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
