import React from 'react';
import { StyleSheet, View } from 'react-native';

import Text from './Text';

import { getChunkArray } from '../utils';


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


function ExtraWeatherInfo() {
  const extraWeatherData = [
    {
      value: '46 bar',
      label: 'Luchtdruk',
    },
    {
      value: 'NW',
      label: 'Windrichting',
    },
    {
      value: '10 km/u',
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
