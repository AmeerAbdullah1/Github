import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { getAuth } from 'firebase/auth';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSubmit = async () => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User registered successfully:', user);
      Alert.alert('Success', 'User registered successfully!');
    } catch (error) {
      console.error('Error registering user:', error);
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={email}
          onChangeText={handleEmailChange}
          style={styles.textInput}
          placeholder="Email"
        />
        <TextInput
          value={password}
          onChangeText={handlePasswordChange}
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Background color
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  textInput: {
    height: 50,
    width: 300,
    borderColor: 'red',
    borderWidth: 2.5,
    borderRadius: 23,
    paddingHorizontal: 35,
    marginBottom: 10,
  },
  button: {
    height: 50,
    width: 150, borderRadius: 25,
    backgroundColor: 'red', // Button color
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Text color
  },
});

export default SignUpScreen;