const scope = 'POKEMON';

export const GET_ALL_POKEMON_START = `${scope}/GET_ALL_POKEMON_START`;
export const GET_ALL_POKEMON_SUCCESS = `${scope}/GET_ALL_POKEMON_SUCCESS`;
export const GET_ALL_POKEMON_FAIL = `${scope}/GET_ALL_POKEMON_FAIL`;

export const CLEAR_POKEMON_DATA = `${scope}/CLEAR_POKEMON_DATA`; 

export const getAllPokemon = () => ({
  type: GET_ALL_POKEMON_START,
});

export const clearPokemonData = () => ({
  type: CLEAR_POKEMON_DATA,
});
