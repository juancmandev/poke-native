const API_HOST = 'https://pokeapi.co/api/v2/';

export async function getPokemon(endPointUrl) {
  try {
    const url = `${API_HOST}pokemon?limit=20&offset=0`;
    const response = await fetch(endPointUrl || url);
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

export async function getPokemonDetailsById(id) {
  try {
    const url = `${API_HOST}/pokemon/${id}`;
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}
