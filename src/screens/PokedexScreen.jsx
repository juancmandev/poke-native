import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { getPokemon } from '../api/getPokemon';

export default function PokedexScreen() {
  useEffect(() => {
    (async () => {
      await loadPokemon();
    })();
  }, []);

  const loadPokemon = async () => {
    try {
      const response = await getPokemon();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Pokedex</Text>
    </View>
  );
}
