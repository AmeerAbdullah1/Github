import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ApiTest from "./ApiTest";

const intro = () => {
  return (
    <View>
      <Text>Here, let's check</Text>
      <ApiTest />
    </View>
  );
};

export default intro;
