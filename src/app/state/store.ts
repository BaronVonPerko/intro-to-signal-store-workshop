import {StoreItem} from '../models/item';
import {signalStore, withState} from '@ngrx/signals';

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
)
