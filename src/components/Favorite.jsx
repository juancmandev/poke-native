import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  addPokemonFavoriteApi,
  getPokemonFavoriteApi,
  isPokemonFavoriteApi,
  removeFavoritePokemon,
} from '../api/favorites.js';

export default function Favorite(props) {
  const { id } = props;
  const [isFavorite, setIsFavorite] = useState(undefined);

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavoriteApi(id);

        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id]);

  const handleFavorite = async () => {
    isFavorite ? removeFavoritePokemon(id) : addPokemonFavoriteApi(id);

    setIsFavorite(!isFavorite);
  };

  return (
    <Icon
      name='heart'
      color='#eee'
      solid={isFavorite}
      size={20}
      onPress={handleFavorite}
      style={{ marginRight: 20 }}
    />
  );
}
