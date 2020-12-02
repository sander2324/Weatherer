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
import { setUnit, setUseLiveLocation } from '../state/actions/settingsActions';
import { getCurrentLocation } from '../state/selectors/locationSelectors';
import globalStyles from '../globalStyles';
import { METRIC_UNIT_VALUE, IMPERIAL_UNIT_VALUE } from '../constants';


const unitOptions = [METRIC_UNIT_VALUE, IMPERIAL_UNIT_VALUE];
const unitDisplayNames = new Map([
  [METRIC_UNIT_VALUE, 'Metriek'],
  [IMPERIAL_UNIT_VALUE, 'Imperiaal'],
]);


function SettingsScreen(props) {
  const dispatch = useDispatch();

  const settings = useSelector((state) => Object.fromEntries(
    Object.entries(state.settings).filter(([_key, value]) => value.onSettingsPage),
  ));
  const currentLocation = useSelector((state) => getCurrentLocation(state, false));

  const cycleUnit = () => {
    const currentUnitValue = settings.unit.value;
    const unitOptionIndex = unitOptions.indexOf(currentUnitValue);
    const newUnitValue = unitOptions[(unitOptionIndex + 1) % unitOptions.length];
    dispatch(setUnit(newUnitValue));
  };

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
          <SettingItem
            onPress={() => cycleUnit()}
            title={settings.unit.displayName}
            value={unitDisplayNames.get(settings.unit.value)}
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
