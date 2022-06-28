import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_STORAGE = 'favorites';

export async function getPokemonFavoriteApi() {
  try {
    const response = await AsyncStorage.getItem(FAVORITES_STORAGE);

    return response != null ? JSON.parse(response) : [];
  } catch (error) {
    throw error;
  }
}

export async function addPokemonFavoriteApi(id) {
  try {
    const favorites = await getPokemonFavoriteApi();

    favorites.push(id);
    await AsyncStorage.setItem(FAVORITES_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
}

export async function isPokemonFavoriteApi(id) {
  try {
    const response = await getPokemonFavoriteApi();

    return response.includes(id);
  } catch (error) {
    throw error;
  }
}

export async function removeFavoritePokemon(id) {
  try {
    const favorites = await getPokemonFavoriteApi();
    const filterFavorites = favorites.filter((favorite) => favorite !== id);
    await AsyncStorage.setItem(
      FAVORITES_STORAGE,
      JSON.stringify(filterFavorites)
    );
  } catch (error) {}
}
