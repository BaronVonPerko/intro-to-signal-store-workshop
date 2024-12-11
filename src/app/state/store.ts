import {StoreItem} from '../models/item';
import {patchState, signalStore, withHooks, withMethods, withState} from '@ngrx/signals';
import {serverItems} from '../data/item-data';

type State = {
  status: 'loading' | 'success' | 'error';
  items: StoreItem[]
}

const initialState: State = {
  status: 'loading',
  items: [],
}

export const AppStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withMethods((store) => ({
    toggleInCart(itemToUpdate: StoreItem, addToCart: boolean) {
      const items = [
        ...store.items().map((item) =>
          item.id === itemToUpdate.id ? {...item, inCart: addToCart} : item
        )
      ];
      patchState(store, () => ({items}));
    }
  })),
  withHooks({
    onInit(store) {
      patchState(store, () => ({items: serverItems}))
    }
  })
)
