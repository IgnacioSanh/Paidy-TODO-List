import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {ButtonVariants} from '~types/components';

import styles from './styles';

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: ButtonVariants;
  disabled?: boolean;
}

export default function Button({
  onPress,
  label,
  variant = ButtonVariants.SOLID,
  disabled = false,
}: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View
        style={[
          styles.wrapper,
          styles[variant],
          disabled ? styles.disabled : null,
        ]}>
        <Text style={styles[`${variant}Text`]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}
