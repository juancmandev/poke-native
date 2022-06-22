import React from 'react';
import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Platform,
} from 'react-native';
import PokemonCard from '../components/PokemonCard';

export default function PokemonList(props) {
  const { pokemon, loadPokemon, isNextUrl } = props;

  const loadMore = () => {
    loadPokemon();
  };

  return (
    <FlatList
      data={pokemon}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNextUrl && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNextUrl && (
          <ActivityIndicator
            size='large'
            style={styles.spinner}
            color='#aeaeae'
          />
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === 'android' ? 30 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === 'android' ? 90 : 60,
  },
});
