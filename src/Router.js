import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './screens/MainScreen';
import SettingsScreen from './screens/SettingsScreen';
import AboutScreen from './screens/AboutScreen';
import LocationScreen from './screens/LocationScreen';
import LocationAddScreen from './screens/LocationAddScreen';


const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown: false }} component={MainScreen} />
        <Stack.Screen name="Settings" options={{ headerTitle: 'Instellingen' }} component={SettingsScreen} />
        <Stack.Screen name="Locations" options={{ headerTitle: 'Locaties' }} component={LocationScreen} />
        <Stack.Screen name="Locations Add" options={{ headerTitle: 'Locatie toevoegen' }} component={LocationAddScreen} />
        <Stack.Screen name="About" options={{ headerTitle: 'Over' }} component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
