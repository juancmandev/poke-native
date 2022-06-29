import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import useAuth from '../hooks/useAuth';
import { getPokemonFavoriteApi } from '../api/favorites';

export default function UserData() {
  const { auth, logout } = useAuth();
  const [total, setTotal] = useState(0);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await getPokemonFavoriteApi();
          setTotal(response.length);
        } catch (erroo) {
          setTotal(0);
        }
      })();
    }, [])
  );

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Welcome </Text>
        <Text style={styles.title}>{`${auth.firstName}`}!</Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu title='Name' text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title='Username' text={`${auth.username}`} />
        <ItemMenu title='Email' text={`${auth.email}`} />
        <ItemMenu title='Favorites count' text={`${total} Pokémon`} />
      </View>

      <Button title='Logout' onPress={logout} />
    </View>
  );
}

function ItemMenu(props) {
  const { title, text } = props;

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}</Text>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    flexDirection: 'row',
    marginBottom: 28,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#cfcfcf',
  },
  itemMenuTitle: {
    fontWeight: 'bold',
    paddingRight: 12,
    width: 120,
  },
});
