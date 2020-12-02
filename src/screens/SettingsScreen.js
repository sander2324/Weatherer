import React from 'react';
import {
  View,
  SafeAreaView,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { StatusBar } from 'expo-status-bar';

import CenteredSettingItem from '../components/CenteredSettingItem';
import SettingItem from '../components/SettingItem';
import { setUseLiveLocation } from '../state/actions/settingsActions';
import { getCurrentLocation } from '../state/selectors/locationSelectors';
import globalStyles from '../globalStyles';


function SettingsScreen(props) {
  const dispatch = useDispatch();

  const settings = useSelector((state) => Object.fromEntries(
    Object.entries(state.settings).filter(([_key, value]) => value.onSettingsPage),
  ));
  const currentLocation = useSelector((state) => getCurrentLocation(state, false));

  return (
    <>
      <SafeAreaView>
        <View style={globalStyles.settingsContainer}>
          <SettingItem
            onPress={() => dispatch(setUseLiveLocation(!settings.useLiveLocation.value))}
            title={settings.useLiveLocation.displayName}
            value={settings.useLiveLocation.value ? 'Aan' : 'Uit'}
          />
          <View style={globalStyles.horizontalLine} />
          <SettingItem
            onPress={() => props.navigation.navigate('Locations')}
            title="Locatie"
            value={`${currentLocation.name}, ${currentLocation.countryCode}`}
          />
          <View style={globalStyles.horizontalLine} />
          <CenteredSettingItem
            onPress={() => props.navigation.navigate('About')}
            content="Over de app"
          />
          <View style={globalStyles.horizontalLine} />
        </View>
      </SafeAreaView>
      <StatusBar style="dark" />
    </>
  );
}

SettingsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SettingsScreen;
