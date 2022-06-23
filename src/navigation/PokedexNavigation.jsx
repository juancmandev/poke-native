import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PokedexScreen from '../screens/PokedexScreen';
import PokemonScreen from '../screens/PokemonScreen';

const Stack = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='PokedexScreen'
        component={PokedexScreen}
        options={{ title: 'Pokédex' }}
      />
      <Stack.Screen name='Pokémon' component={PokemonScreen} />
    </Stack.Navigator>
  );
}
