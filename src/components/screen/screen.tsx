import React, {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Screen({children}: PropsWithChildren<{}>) {
  return <SafeAreaView edges={['top']}>{children}</SafeAreaView>;
}
