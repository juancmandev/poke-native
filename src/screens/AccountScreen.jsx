import React from 'react';
import { View } from 'react-native';
import LoginForm from '../auth/LoginForm';
import UserData from '../auth/UserData';

export default function AccountScreen() {
  const auth = null;

  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
}
