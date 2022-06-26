import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import useAuth from '../hooks/useAuth';

export default function UserData() {
  const { auth, logout } = useAuth();

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
        <ItemMenu title='Favorites count' text='0 Pokémon' />
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
