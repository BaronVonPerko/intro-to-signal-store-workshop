import {StoreItem} from '../models/item';
import {patchState, signalStore, withComputed, withHooks, withMethods, withState} from '@ngrx/signals';
import {serverItems} from '../data/item-data';
import {computed} from '@angular/core';
import {setEntities, updateEntities, updateEntity, withEntities} from '@ngrx/signals/entities';

type State = {
  status: 'loading' | 'success' | 'error';
}

const initialState: State = {
  status: 'loading',
}

export const AppStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withEntities<StoreItem>(),
  withComputed((store) => ({
    itemsInCart: computed(() => store.entities().filter(item => item.inCart)),
  })),
  withComputed((store) => ({
    totalItemsInCart: computed(() => store.itemsInCart().length),
    totalPrice: computed(() => store.itemsInCart().reduce((acc, curr) => acc + curr.price, 0)),
  })),
  withMethods((store) => ({
    toggleInCart(itemToUpdate: StoreItem, addToCart: boolean) {
      patchState(
        store,
        updateEntity({id: itemToUpdate.id, changes: {inCart: addToCart} }),
      )
    }
  })),
  withHooks({
    onInit(store) {
      patchState(
        store,
        setEntities(serverItems)
      )
    }
  })
)
