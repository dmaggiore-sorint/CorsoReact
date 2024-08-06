import { all, fork } from 'redux-saga/effects';

import pokemonSagas from './pokemon/sagas';

export default function* rootSaga() {
  yield all([
    yield fork(pokemonSagas),
  ]);
};
