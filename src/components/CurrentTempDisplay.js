import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import { useSelector } from 'react-redux';

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
  weatherMinMax: {
    marginTop: 5,
  },
});

function CurrentTempDisplay() {
  const currentWeatherData = useSelector((state) => state.weather.data.current);

  const weatherIconUrl = `https://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@2x.png`;

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
        <Text fontFamily="Roboto-Bold" fontSize={96}>
          {Math.round(currentWeatherData.main.temp)}
        </Text>
        <Text fontFamily="Roboto-Bold" fontSize={96}>°</Text>
      </View>
      <Text style={styles.weatherMinMax} fontFamily="Roboto-Bold" fontSize={20}>
        {/* eslint-disable-next-line max-len */}
        {Math.round(currentWeatherData.main.temp_max)} / {Math.floor(currentWeatherData.main.temp_min)}°C
      </Text>
      <Image
        source={{ uri: weatherIconUrl }}
        style={styles.weatherImage}
      />
    </View>
  );
}

export default CurrentTempDisplay;
