import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
} from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function LoginForm() {
  const formik = useFormik({
    validationSchema: Yup.object(validationSchema()),
    initialValues: initialValues(),
    onSubmit: () => {},
  });

  return (
    <View>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder='Username'
        style={styles.input}
        autoCapitalize='none'
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
      />
      <TextInput
        placeholder='Password'
        style={styles.input}
        autoCapitalize='none'
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
      />
      <Button title='Enter' onPress={formik.handleSubmit} />
      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
    </View>
  );
}

function initialValues() {
  return {
    username: '',
    password: '',
  };
}

function validationSchema() {
  return {
    username: Yup.string().required('Username required'),
    password: Yup.string().required('Password required'),
  };
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  error: {
    textAlign: 'center',
    color: '#f00',
    marginTop: 20,
  },
});