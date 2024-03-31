// SettingsScreen.js

import React, { useState } from 'react';
import { View, Text, Button, Switch } from 'react-native';

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // You can add logic to change the theme or styles based on isDarkMode value
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>Dark Mode:</Text>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SettingsScreen;
