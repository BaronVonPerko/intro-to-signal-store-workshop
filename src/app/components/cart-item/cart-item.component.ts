import {Component, input} from '@angular/core';
import {Item} from '../../models/item';
import {CurrencyPipe, NgOptimizedImage} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-cart-item',
  imports: [CurrencyPipe, NgOptimizedImage, MatCardModule, MatButtonModule],
  template: `
    <mat-card>
      <mat-card-title-group>
        <mat-card-title>{{item().name}}</mat-card-title>
        <mat-card-subtitle>{{item().price | currency}}</mat-card-subtitle>
        <img mat-card-image-sm [ngSrc]="item().image" mat-card-image width="75" height="75" />
      </mat-card-title-group>
      <mat-card-actions>
        <button mat-button>Remove from Cart</button>
      </mat-card-actions>
    </mat-card>
  `,
})
export class CartItemComponent {
  item = input.required<Item>();
}
