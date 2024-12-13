import {signalStore} from '@ngrx/signals';
import {withShopItems} from './shop-store';

export const AppStore = signalStore(
  {providedIn: 'root'},
  withShopItems(),
);


