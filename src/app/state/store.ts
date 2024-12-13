import {signalStore} from '@ngrx/signals';
import {withShopItems} from './shop-store';
import {withUserStore} from './user-store';

export const AppStore = signalStore(
  {providedIn: 'root'},
  withShopItems(),
  withUserStore(),
);


