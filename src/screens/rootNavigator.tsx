import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {useAuthContext} from '~contexts/useAuthContext';
import {ScreenNames} from '~types';
import {LoginScreen, TodoScreen} from './index';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const {isAuthenticated} = useAuthContext();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAuthenticated ? (
          <Stack.Screen name={ScreenNames.TODO} component={TodoScreen} />
        ) : (
          <Stack.Screen name={ScreenNames.LOGIN} component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
