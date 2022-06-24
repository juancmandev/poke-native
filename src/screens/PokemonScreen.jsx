import React, { useState, useEffect } from 'react';
import { Text, ScrollView } from 'react-native';
import { getPokemonDetailsById } from '../api/getPokemon';
import PokemonHeader from '../components/PokemonHeader';
import PokemonTypes from '../components/PokemonTypes';
import PokemonStats from '../components/PokemonStats';

export default function PokemonScreen(props) {
  const {
    navigation,
    route: { params },
  } = props;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsById(params.id);

        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <PokemonHeader
        name={pokemon.name}
        id={pokemon.id}
        image={pokemon.sprites.other['official-artwork'].front_default}
        typeA={pokemon.types[0].type.name}
      />
      <PokemonTypes types={pokemon.types} />
      <PokemonStats stats={pokemon.stats} />
    </ScrollView>
  );
}
