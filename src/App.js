import React from 'react';

import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';

import RootProvider from './providers';
import MainScreen from './screens/MainScreen';


function App() {
  return (
    <>
      <RootProvider>
        <MainScreen />
      </RootProvider>
      <StatusBar style="light" />
    </>
  );
}

export default registerRootComponent(App);
