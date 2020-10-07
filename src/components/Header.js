import React from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  StatusBar,
} from 'react-native';

import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

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

function Header(props) {
  const location = useSelector((state) => getCurrentLocation(state));

  return (
    <View style={styles.header}>
      <View>
        <Text fontFamily="Roboto-Bold" fontSize={22}>{location.name}</Text>
        <Text fontSize={10}>Net bijgewerkt</Text>
      </View>
      <TouchableHighlight onPress={() => props.navigation.navigate('Settings')}>
        <Text>Menu</Text>
      </TouchableHighlight>
    </View>
  );
}

Header.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Header;
