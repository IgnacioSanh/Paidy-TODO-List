import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default function Button() {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Text>Press me!</Text>
    </TouchableOpacity>
  );
}
