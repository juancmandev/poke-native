import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { getPokemonDetailsById } from '../api/getPokemon';
import Icon from 'react-native-vector-icons/FontAwesome5';
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
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <Icon
          name='arrow-left'
          color='#fff'
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params]);

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
