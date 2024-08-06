import { produce } from 'immer';

import {
  GET_ALL_POKEMON_START,
  GET_ALL_POKEMON_SUCCESS,
  GET_ALL_POKEMON_FAIL,
  CLEAR_POKEMON_DATA,
} from '../actions';

export const initialState = {
  pokemonList: [],
  loading: false,
  error: null,
};

function pokemonReducer(state = initialState, action) {
  return produce(state, (draftState) => {
    const draft = draftState;
    switch (action.type) {
      case GET_ALL_POKEMON_START:
        draft.loading = true;
        draft.error = null;
        draft.pokemonList = [];
        break;
      case GET_ALL_POKEMON_SUCCESS:
        draft.loading = false;
        draft.error = null;
        draft.pokemonList = action.result.results;
        break;
      case GET_ALL_POKEMON_FAIL:
        draft.loading = false;
        draft.error = action.error;
        draft.pokemonList = [];
        break;
      case CLEAR_POKEMON_DATA:
        draft.loading = false;
        draft.error = null;
        draft.pokemonList = [];
      default:
        break;
    }
  });
}

export default pokemonReducer;
