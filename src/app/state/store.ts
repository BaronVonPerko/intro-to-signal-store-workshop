import {StoreItem} from '../models/item';
import {patchState, signalStore, withHooks, withState} from '@ngrx/signals';
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
  withHooks({
    onInit(store) {
      patchState(store, () => ({items: serverItems}))
    }
  })
)
