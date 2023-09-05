import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {ButtonVariants} from '~types/components';

import styles from './styles';

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: ButtonVariants;
}

export default function Button({
  onPress,
  label,
  variant = ButtonVariants.SOLID,
}: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.wrapper, styles[variant]]}>
        <Text style={styles[`${variant}Text`]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}
