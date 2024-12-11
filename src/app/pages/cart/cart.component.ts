import {Component, inject} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {CartItemComponent} from '../../components/cart-item/cart-item.component';
import {AppStore} from '../../state/store';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, MatButtonModule, CartItemComponent],
  template: `
    <h3>Cart Page</h3>
    @for (item of store.itemsInCart(); track $index) {
      <app-cart-item [item]="item" />
    }

    @if (true) {
      <h3>Total: {{0 | currency}}</h3>
      <button mat-flat-button>Check Out</button>
    }
  `,
  styles: `
    app-cart-item {margin: 1rem;}
  `
})
export class CartComponent {
  protected store = inject(AppStore)
}
