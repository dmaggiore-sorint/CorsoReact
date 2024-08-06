
import { takeLatest, put, call, all } from 'redux-saga/effects';
import * as api from '../api';
import {
  GET_ALL_POKEMON_START,
  GET_ALL_POKEMON_SUCCESS,
  GET_ALL_POKEMON_FAIL,
} from '../actions';

function* getPokemonList() {
  try {
    const result = yield call(() => api.getPokemonList());
    yield put({ type: GET_ALL_POKEMON_SUCCESS, result });
  } catch(error) {
    yield put({ type: GET_ALL_POKEMON_FAIL, error });
  }
}

function* root() {
  yield takeLatest(GET_ALL_POKEMON_START, getPokemonList);
}

export default root;
