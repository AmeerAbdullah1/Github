import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import ApiTest from "./ApiTest";

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleButtonPress = () => {
    navigation.navigate('SignUp');
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User logged in successfully:', user);
      // Navigate to Home Screen or authenticated area
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Error', error.message);
      // Handle error
    }
  };

  return (
    <View style={styles.container}>
   
      <Image source={require('./assets/pic.png')} style={styles.image} />

      <Text style={styles.title}>Login Screen</Text>

      <View style={styles.textInputContainer}>
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
     

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>Go to Sign Up</Text>
      </TouchableOpacity>
       {/* Render ApiTest component */}
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 150,
    marginBottom: 20,
  },
  textInputContainer: {},
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
    height: 40,
    width: 250,
    borderRadius: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
 
});

export default LoginScreen;
