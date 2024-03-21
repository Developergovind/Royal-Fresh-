import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'shop', component: ShopComponent
  },
  {
    path: 'checkout', component: CheckoutComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'product-detail', component: ProductDetailComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: '**', component: Page404Component
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
