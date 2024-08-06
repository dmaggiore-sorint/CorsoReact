import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearPokemonData, getAllPokemon } from './store/pokemon/actions';

const Pokemon = () => {
  const dispatch = useDispatch();
  const { pokemonList, loading } = useSelector((state) => state.pokemon);

  console.log(pokemonList);

  useEffect(() => {
    dispatch(getAllPokemon());
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!loading && pokemonList.length === 0) {
    return (
      <div>
        <h2>No Results</h2>
        <button type="button" onClick={() => dispatch(getAllPokemon())}>
          Retry Getting Pokemon List
        </button>
      </div>
    );
  }

  return (
    <div>
      <button type="button" onClick={() => dispatch(clearPokemonData())}>
        Clear
      </button>
      <h2 className="pokedex-title">Pokemon List:</h2>
      <div className="pokedex">
        {pokemonList.map((pokemon) => {
          let pokemonId = pokemon.url
            .replace('https://pokeapi.co/api/v2/pokemon/', '')
            .replace('/', '');
          return (
            <div key={pokemon.name}>
              <p>
                Name: {pokemon.name} ID: {pokemonId}
              </p>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                alt={pokemon.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pokemon;

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png
