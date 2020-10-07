import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Text from '../components/Text';


function SettingsScreen() {
  return (
    <SafeAreaView>
        <Text color="#000000">Instellingenpagina!</Text>
    </SafeAreaView>
  );
}

export default SettingsScreen;
