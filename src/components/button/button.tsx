import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface ButtonProps {
  label: string;
  onPress: () => void;
}

export default function Button({onPress, label}: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}
