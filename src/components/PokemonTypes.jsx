import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { getColorByType } from '../utils/getColorByType';

export default function PokemonTypes(props) {
  const { types } = props;

  const color = (type) => {
    return getColorByType(type);
  };

  return (
    <View style={styles.content}>
      {types.map((item) => (
        <View
          key={item.type.name}
          style={{
            backgroundColor: color(item.type.name),
            ...styles.pill,
          }}>
          <Text style={styles.textType}>{item.type.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 40,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 12,
    marginHorizontal: 10,
  },
  textType: {
    color: '#eee',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});
