import React, {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';

export default function Screen({children}: PropsWithChildren<{}>) {
  return (
    <SafeAreaView
      edges={['top', 'bottom', 'left', 'right']}
      style={[styles.flex, styles.background]}>
      {children}
    </SafeAreaView>
  );
}
