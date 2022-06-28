import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { getPokemonDetailsById } from '../api/getPokemon';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PokemonHeader from '../components/PokemonHeader';
import PokemonTypes from '../components/PokemonTypes';
import PokemonStats from '../components/PokemonStats';
import Favorite from '../components/Favorite';
import useAuth from '../hooks/useAuth';

export default function PokemonScreen(props) {
  const {
    navigation,
    route: { params },
  } = props;
  const [pokemon, setPokemon] = useState(null);
  const { auth } = useAuth();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (auth ? <Favorite id={pokemon?.id} /> : undefined),
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
  }, [navigation, params, pokemon, auth]);

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
