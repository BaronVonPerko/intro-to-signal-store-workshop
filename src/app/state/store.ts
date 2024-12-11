import {StoreItem} from '../models/item';
import {patchState, signalStore, withComputed, withHooks, withMethods, withState} from '@ngrx/signals';
import {serverItems} from '../data/item-data';
import {computed} from '@angular/core';

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
  withComputed((store) => ({
    itemsInCart: computed(() => store.items().filter(item => item.inCart)),
  })),
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
