import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

interface ButtonProps {
  label: string;
  onPress: () => void;
}

export default function Button({onPress, label}: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: 'red',
          paddingHorizontal: 10,
          paddingVertical: 5,
          alignSelf: 'center',
        }}>
        <Text style={{color: 'white'}}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}
