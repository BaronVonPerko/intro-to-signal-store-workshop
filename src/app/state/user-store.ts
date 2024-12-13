import {signalStoreFeature, withState} from '@ngrx/signals';
import {User} from '../models/user';

type State = {
  user: User
}

const initialState: State = {
  user: {
    id: 42,
    username: 'cperko',
    firstName: 'Chris',
    lastName: 'Perko',
  }
}

export function withUserStore<_>() {
  return signalStoreFeature(
    withState(initialState),
  )
}
