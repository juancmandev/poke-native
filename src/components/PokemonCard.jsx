import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  View,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getColorByType } from '../utils/getColorByType';

export default function PokemonCard(props) {
  const navigation = useNavigation();
  const { pokemon } = props;
  const bgStyle = {
    backgroundColor: `${getColorByType(pokemon.typeA)}`,
    ...styles.bgStyle,
  };

  const goToPokemon = () => {
    navigation.push('Pokémon', { id: pokemon.id });
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyle}>
            <View style={styles.bgIdStyle}>
              <Text style={styles.textId}>
                #{`${pokemon.id}`.padStart(3, 0)}
              </Text>
            </View>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Image style={styles.image} source={{ url: pokemon.image }} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyle: {
    flex: 1,
    borderRadius: 16,
    padding: 12,
  },
  bgIdStyle: {
    width: 52,
    textAlign: 'center',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#eee',
  },
  textId: {
    color: '#000',
  },
  name: {
    color: '#eee',
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 12,
    textTransform: 'capitalize',
  },
  image: {
    position: 'absolute',
    bottom: -4,
    right: 0,
    width: 90,
    height: 90,
  },
});
