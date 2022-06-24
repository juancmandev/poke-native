export const getColorByStat = (stat) => {
  let color = '';

  console.log(stat);

  switch (stat) {
    case 'hp':
      color = '#ff0000';
      break;
    case 'attack':
      color = '#f08030';
      break;
    case 'defense':
      color = '#f8d030';
      break;
    case 'special-attack':
      color = '#6890f0';
      break;
    case 'special-defense':
      color = '#78c850';
      break;
    case 'speed':
      color = '#f85888';
      break;
    default:
      color = '#eee';
      break;
  }

  return color;
};
