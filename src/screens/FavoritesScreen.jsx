import React, { useState, useCallback } from 'react';
import { Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { getPokemonFavoriteApi } from '../api/favorites';
import { getPokemonDetailsById } from '../api/getPokemon';
import PokemonList from '../containers/PokemonList';
import NotLogged from '../components/NotLogged';
import useAuth from '../hooks/useAuth.js';

export default function FavoritesScreen() {
  const [pokemon, setPokemon] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonFavoriteApi();
          const pokemonArray = [];

          for await (const id of response) {
            const pokemonDetails = await getPokemonDetailsById(id);

            pokemonArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              typeA: pokemonDetails.types[0].type.name,
              typeB:
                pokemonDetails.types.length > 1
                  ? pokemonDetails.types[1].type.name
                  : null,
              order: pokemonDetails.order,
              image:
                pokemonDetails.sprites.other['official-artwork'].front_default,
            });
          }

          setPokemon(pokemonArray);
        })();
      }
    }, [auth])
  );

  return !auth ? <NotLogged /> : <PokemonList pokemon={pokemon} />;
}
