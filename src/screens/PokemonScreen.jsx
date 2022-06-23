import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { getPokemonDetailsById } from '../api/getPokemon';

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
        console.log(response);

        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <View>
      <Text>{pokemon.name}</Text>
    </View>
  );
}
