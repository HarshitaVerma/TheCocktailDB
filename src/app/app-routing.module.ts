import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './modules/navigation/components/cart/cart.component';
import { ProductListComponent } from './modules/navigation/components/product-list/product-list.component';
import { ProductDetailsComponent } from './modules/navigation/components/product-details/product-details.component';
import { HomeComponent } from './modules/navigation/components/home/home.component';

const routes: Routes = [
  { path: 'cocktailList', component: ProductListComponent },
  { path: 'cocktailDetail', component: ProductDetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/cocktailList', pathMatch: 'full' } // redirect to `Home-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
