import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Login from './src/screens/login/login';

export default function App() {
  return (
    <SafeAreaProvider>
      <Login />
    </SafeAreaProvider>
  );
}
