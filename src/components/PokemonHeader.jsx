import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, Image } from 'react-native';
import { getColorByType } from '../utils/getColorByType';

export default function PokemonHeader(props) {
  const { name, id, image, typeA } = props;
  const color = getColorByType(typeA);
  const bgStyle = [{ backgroundColor: color, ...styles.bg }];

  return (
    <>
      <View style={bgStyle} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.pokemonName}>{name}</Text>
          <View style={styles.bgIdStyle}>
            <Text style={styles.textId}>#{`${id}`.padStart(3, 0)}</Text>
          </View>
        </View>
        <View style={styles.contentImage}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: 400,
    position: 'absolute',
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
  },
  pokemonName: {
    color: '#eee',
    fontWeight: 'bold',
    fontSize: 28,
    textTransform: 'capitalize',
  },
  bgIdStyle: {
    width: 58,
    textAlign: 'center',
    borderRadius: 12,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: '#eee',
  },
  textId: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },
  contentImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 30,
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: 'contain',
  },
});
