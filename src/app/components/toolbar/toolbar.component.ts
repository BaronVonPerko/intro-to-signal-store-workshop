import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {AppStore} from '../../state/store';

@Component({
  selector: 'app-toolbar',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    RouterLink,
  ],
  template: `
    <mat-toolbar>
      <div class="left">
        <h3>Demo Shop</h3>
        <a mat-button routerLink="/">
          Store
        </a>
      </div>
      <a mat-icon-button routerLink="/cart">
        <mat-icon [matBadge]="store.totalItemsInCart()">shopping_cart</mat-icon>
      </a>
    </mat-toolbar>
  `,
  styles: `
    mat-toolbar {
      display: flex;
      justify-content: space-between;
    }

    .left {
      display: flex;
      align-items: center;
    }
  `
})
export class ToolbarComponent {
  protected store = inject(AppStore);
}
