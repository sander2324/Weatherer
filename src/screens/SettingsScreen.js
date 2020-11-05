import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { StatusBar } from 'expo-status-bar';

import Text from '../components/Text';
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
          <TouchableWithoutFeedback
            onPress={() => dispatch(setUseLiveLocation(!settings.useLiveLocation.value))}
          >
            <View style={globalStyles.setting}>
              <Text color="#000000" fontSize={20}>{settings.useLiveLocation.displayName}</Text>
              <Text color="#000000" fontSize={20} fontFamily="Roboto-Bold">{settings.useLiveLocation.value ? 'Aan' : 'Uit'}</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={globalStyles.horizontalLine} />
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate('Locations')}
          >
            <View style={globalStyles.setting}>
              <Text color="#000000" fontSize={20}>Locatie</Text>
              <Text color="#000000" fontSize={20} fontFamily="Roboto-Bold">{currentLocation.name}</Text>
            </View>
          </TouchableWithoutFeedback>
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
