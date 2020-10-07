import 'react-native-gesture-handler';

import React from 'react';

import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';

import RootProvider from './providers';
import Router from './Router';


function App() {
  return (
    <>
      <RootProvider>
        <Router />
      </RootProvider>
      <StatusBar style="light" />
    </>
  );
}

export default registerRootComponent(App);
