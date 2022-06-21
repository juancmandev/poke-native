const API_HOST = 'https://pokeapi.co/api/v2/';

export async function getPokemon() {
  try {
    const url = `${API_HOST}pokemon?limit=20&offset=0`;
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetails(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}
