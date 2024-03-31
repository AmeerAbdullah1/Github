import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';


const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, error, fetchData } = useFetch();

  const handleSignup = async () => {
    const data = await fetchData('YOUR_SIGNUP_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    // handle signup response
    console.log('Signup response:', data);

    // If signup is successful, navigate to another screen
    // navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign Up" onPress={handleSignup} disabled={loading} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    input: {
      width: '100%',
      padding: 10,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
    error: {
      color: 'red',
      marginTop: 10,
    },
  });
  
  export default SignupScreen;