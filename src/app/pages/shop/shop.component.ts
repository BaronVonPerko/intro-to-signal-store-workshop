import {Component} from '@angular/core';
import {ShopItemComponent} from '../../components/shop-item/shop-item.component';

@Component({
  selector: 'app-shop',
  imports: [
    ShopItemComponent
  ],
  template: `
    <h3>Shop Page</h3>
    <section class="items">
      @if (true) {
        <p>Loading...</p>
      }
      @for(item of []; track $index) {
        <app-shop-item [item]="item" />
      }
    </section>
  `,
  styles: `
    section.items {
      display: grid;
      grid-template-columns: repeat(2, auto);
      grid-gap: 2rem;
    }`
})
export class ShopComponent {
}
