import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {AuthProvider} from '~contexts/authContext';
import TaskProvider from '~contexts/tasksContext';
import RootNavigator from '~screens/rootNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <TaskProvider>
          <RootNavigator />
        </TaskProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
