import React from 'react';
import { StyleSheet, View } from 'react-native';

import { useSelector } from 'react-redux';

import Text from './Text';

import { getChunkArray, getCompassValueFromDegree } from '../utils';
import { IMPERIAL_UNIT_VALUE, METRIC_UNIT_VALUE } from '../constants';


const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  infoComponentRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoComponentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoComponent: {
    height: 75,
    width: 125,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoComponentValue: {
    fontSize: 24,
  },
  infoComponentLabel: {},
  bar: {
    height: 50,
    width: 1.5,
    backgroundColor: '#f4f4f4',
  },
});


const windspeedValues = new Map([
  [METRIC_UNIT_VALUE, 'm/s'],
  [IMPERIAL_UNIT_VALUE, 'mph'],
]);

function ExtraWeatherInfo() {
  const currentWeatherData = useSelector((state) => state.weather.data.current);
  const unit = useSelector((state) => state.settings.unit.value);

  const extraWeatherData = [
    {
      value: `${currentWeatherData.main.pressure} hPa`,
      label: 'Luchtdruk',
    },
    {
      value: getCompassValueFromDegree(currentWeatherData.wind.deg),
      label: 'Windrichting',
    },
    {
      value: `${currentWeatherData.wind.speed} ${windspeedValues.get(unit)}`,
      label: 'Windshelheid',
    },
  ];

  // Split weather data in rows of three
  const extraWeatherDataRows = getChunkArray(extraWeatherData, 3);

  /* eslint-disable react/no-array-index-key */
  const infoComponentRows = extraWeatherDataRows.map((row, idx) => (
    <View key={idx} style={styles.infoComponentRow}>
      {row.map((data, rowIdx) => (
        <View key={data.label} style={styles.infoComponentContainer}>
          <View style={styles.infoComponent}>
            <Text fontFamily="Roboto-Bold" style={styles.infoComponentValue}>{data.value}</Text>
            <Text style={styles.infoComponentLabel}>{data.label}</Text>
          </View>
          {rowIdx !== row.length - 1 && <View style={styles.bar} />}
        </View>
      ))}
    </View>
  ));
  /* eslint-enable react/no-array-index-key */

  return (
    <View style={styles.container}>
      {infoComponentRows}
    </View>
  );
}

export default ExtraWeatherInfo;
