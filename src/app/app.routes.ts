import { Routes } from '@angular/router';
import {ShopComponent} from './pages/shop/shop.component';
import {CartComponent} from './pages/cart/cart.component';

export const routes: Routes = [
  {path: '', component: ShopComponent},
  {path: 'cart', component: CartComponent},
];
