import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthProvider} from '~contexts/useAuthContext';

import RootNavigator from '~screens/rootNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </SafeAreaProvider>
  );
}
