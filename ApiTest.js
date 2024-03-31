import React from 'react';
import  { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const Apitest = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <View>
      {data && (
        <Text>{JSON.stringify(data)}</Text>
      )}
    </View>
  );
};

export default Apitest;
