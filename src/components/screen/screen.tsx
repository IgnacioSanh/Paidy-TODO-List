import React, {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

export default function Screen({children}: PropsWithChildren<{}>) {
  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.flex}>
      {children}
    </SafeAreaView>
  );
}
