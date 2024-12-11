import {Component, inject, input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {CurrencyPipe, NgOptimizedImage} from '@angular/common';
import {StoreItem} from '../../models/item';
import {AppStore} from '../../state/store';

@Component({
  selector: 'app-shop-item',
  imports: [MatCardModule, MatButtonModule, NgOptimizedImage, CurrencyPipe],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{item().name}}</mat-card-title>
        <mat-card-subtitle>{{item().price | currency}}</mat-card-subtitle>
      </mat-card-header>
      <img [ngSrc]="item().image" mat-card-image width="400" height="400" />
      <mat-card-actions>
        @if (!item().inCart) {
          <button (click)="store.toggleInCart(item(), true)" mat-flat-button>Add to Cart</button>
        } @else {
          <button (click)="store.toggleInCart(item(), false)" mat-button>Remove from Cart</button>
        }
      </mat-card-actions>
    </mat-card>
  `,
  styles: `
    mat-card img {
      width: 100%;
      object-fit: contain;
      border-radius: var(--mdc-outlined-card-container-shape);
    }`
})
export class ShopItemComponent {
  item = input.required<StoreItem>();
  store = inject(AppStore);
}
