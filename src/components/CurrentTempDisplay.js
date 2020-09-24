import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import Text from './Text';
import { BACKGROUND_COLOR_DAY } from '../constants';


const styles = StyleSheet.create({
  tempDisplay: {
    marginTop: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  currentTemp: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'left',
  },
  weatherImage: {
    marginTop: 20,
    width: 100,
    height: 100,
  },
});

function CurrentTempDisplay() {
  return (
    <View style={styles.tempDisplay}>
      <View style={styles.currentTemp}>
        {/* Dirty hack to get the current temp number to be centered */}
        <View
          accessibilityElementsHidden={true}
          importantForAccessibility="no-hide-descendants"
        >
          <Text fontFamily="Roboto-Bold" fontSize={96} color={BACKGROUND_COLOR_DAY}>°</Text>
        </View>
        <Text fontFamily="Roboto-Bold" fontSize={96}>22</Text>
        <Text fontFamily="Roboto-Bold" fontSize={96}>°</Text>
      </View>
      <Text fontFamily="Roboto-Bold" fontSize={20}>25 / 10°C</Text>
      <Image
        source={{ uri: 'https://openweathermap.org/img/wn/02d@2x.png' }}
        style={styles.weatherImage}
      />
    </View>
  );
}

export default CurrentTempDisplay;
