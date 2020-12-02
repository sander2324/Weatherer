import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  StatusBar,
} from 'react-native';

import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { Icon } from 'react-native-elements';

import Text from './Text';

import { getCurrentLocation } from '../state/selectors/locationSelectors';
import { getLastUpdatedMessage } from '../utils';

import { DEFAULT_TEXT_COLOR } from '../constants';


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
  menuButton: {
    padding: 10,
  },
  locationName: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    marginRight: 2.5,
  },
});

function Header(props) {
  const location = useSelector((state) => getCurrentLocation(state));
  const lastUpdated = useSelector((state) => state.weather.lastUpdated);
  const isLoading = useSelector((state) => state.weather.isLoading);
  const useLiveLocation = useSelector((state) => state.settings.useLiveLocation.value);

  const [lastUpdatedMessage, setLastUpdatedMessage] = useState(null);

  useEffect(() => {
    setLastUpdatedMessage(getLastUpdatedMessage(lastUpdated));

    const setMessageInterval = setInterval(() => {
      setLastUpdatedMessage(getLastUpdatedMessage(lastUpdated));
    }, 5000);

    return () => clearInterval(setMessageInterval);
  }, [lastUpdated]);

  return (
    <View style={styles.header}>
      <View>
        <View style={styles.locationName}>
          {
            useLiveLocation && !isLoading && (
              <Icon
                color={DEFAULT_TEXT_COLOR}
                name="gps-fixed"
                type="material"
                style={styles.locationIcon}
              />
            )
          }
          {location && <Text fontFamily="Roboto-Bold" fontSize={22}>{location.name}</Text>}
        </View>
        {lastUpdatedMessage && <Text fontSize={10}>{lastUpdatedMessage}</Text>}
      </View>
      <TouchableHighlight
        onPress={() => props.navigation.navigate('Settings')}
        style={styles.menuButton}
      >
        <Text>Menu</Text>
      </TouchableHighlight>
    </View>
  );
}

Header.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Header;
