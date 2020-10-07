import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './screens/MainScreen';
import SettingsScreen from './screens/SettingsScreen';


const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown: false }} component={MainScreen} />
        <Stack.Screen name="Settings" options={{ headerTitle: 'Instellingen' }} component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
