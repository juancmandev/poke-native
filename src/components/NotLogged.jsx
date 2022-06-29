import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NotLogged() {
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <Text style={styles.text}>
        To see your favorites Pokémon, you need to log in
      </Text>
      <Button
        title='Go to login'
        onPress={() => navigation.navigate('Account')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 48,
    paddingHorizontal: 28,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 12,
  },
});
