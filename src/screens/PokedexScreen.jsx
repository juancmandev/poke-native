import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { getPokemon, getPokemonDetails } from '../api/getPokemon';
import PokemonList from '../containers/PokemonList';

export default function PokedexScreen() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    (async () => {
      await loadPokemon();
    })();
  }, []);

  const loadPokemon = async () => {
    try {
      const response = await getPokemon();
      const pokemonArray = [];

      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetails(pokemon.url);

        pokemonArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          typeA: pokemonDetails.types[0].type.name,
          typeB:
            pokemonDetails.types.length > 1
              ? pokemonDetails.types[1].type.name
              : null,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default,
        });
      }

      setPokemon([...pokemon, ...pokemonArray]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <PokemonList pokemon={pokemon} />
    </View>
  );
}
