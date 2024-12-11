import {Component, inject} from '@angular/core';
import {ShopItemComponent} from '../../components/shop-item/shop-item.component';
import {AppStore} from '../../state/store';

@Component({
  selector: 'app-shop',
  imports: [
    ShopItemComponent
  ],
  template: `
    <h3>Shop Page</h3>
    <section class="items">
      @if (status() === 'loading') {
        <p>Loading...</p>
      }
      @for(item of items(); track $index) {
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
  protected store = inject(AppStore);
  protected items = this.store.entities;
  protected status = this.store.status;
}
