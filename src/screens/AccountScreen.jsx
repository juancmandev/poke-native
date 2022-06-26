import React from 'react';
import { View } from 'react-native';
import LoginForm from '../auth/LoginForm';
import UserData from '../auth/UserData';
import useAuth from '../hooks/useAuth';

export default function AccountScreen() {
  const { auth } = useAuth();

  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
}
