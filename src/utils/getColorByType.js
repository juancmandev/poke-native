export const POKEMON_TYPE_COLORS = {
  normal: '#a8a878',
  fighting: '#c03028',
  flying: '#A890F0',
  poison: '#A040A0',
  ground: '#E0C068',
  rock: '#B8A038',
  bug: '#A8B820',
  ghost: '#705898',
  steel: '#B8B8D0',
  fire: '#ee8130',
  water: '#5280f0',
  grass: '#7ac74c',
  electric: '#f7d02c',
  psychic: '#F85888',
  ice: '#98D8D8',
  dragon: '#7038F8',
  dark: '#705848',
  fairy: '#EE99AC',
};

export const getColorByType = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()];
