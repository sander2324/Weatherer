import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import { useSelector } from 'react-redux';

import Text from './Text';

import { getCurrentLocation } from '../state/selectors/locationSelectors';


const styles = StyleSheet.create({
  header: {
    marginTop: StatusBar.currentHeight + 22,
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
});

function Header() {
  const location = useSelector((state) => getCurrentLocation(state));

  return (
    <View style={styles.header}>
      <View>
        <Text fontFamily="Roboto-Bold" fontSize={22}>{location.name}</Text>
        <Text fontSize={10}>Net bijgewerkt</Text>
      </View>
      <Text>Menu</Text>
    </View>
  );
}

export default Header;
