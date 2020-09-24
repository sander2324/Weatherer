import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Header from '../components/Header';
import CurrentTempDisplay from '../components/CurrentTempDisplay';

import { BACKGROUND_COLOR_DAY } from '../constants';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR_DAY,
  },
});

function MainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <CurrentTempDisplay />
    </SafeAreaView>
  );
}

export default MainScreen;
