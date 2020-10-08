import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import { StatusBar } from 'expo-status-bar';

import Text from '../components/Text';
import { setUseLiveLocation } from '../state/actions/settingsActions';
import { getCurrentLocation } from '../state/selectors/locationSelectors';


const styles = StyleSheet.create({
  settingsContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  setting: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 25,
    paddingRight: 25,
    height: 80,
    width: '100%',
  },
  horizontalLine: {
    width: '90%',
    height: 1,
    backgroundColor: '#000000',
    alignSelf: 'center',
  },
});

function SettingsScreen() {
  const dispatch = useDispatch();

  const settings = useSelector((state) => Object.fromEntries(
    Object.entries(state.settings).filter(([_key, value]) => value.onSettingsPage),
  ));
  const currentLocation = useSelector((state) => getCurrentLocation(state));

  return (
    <>
      <SafeAreaView>
        <View style={styles.settingsContainer}>
          <View style={styles.setting}>
            <Text color="#000000" fontSize={20}>Locatie</Text>
            <Text color="#000000" fontSize={20} fontFamily="Roboto-Bold">{currentLocation.name}</Text>
          </View>
          <View style={styles.horizontalLine} />
          <TouchableWithoutFeedback
            onPress={() => dispatch(setUseLiveLocation(!settings.useLiveLocation.value))}
          >
            <View style={styles.setting}>
              <Text color="#000000" fontSize={20}>{settings.useLiveLocation.displayName}</Text>
              <Text color="#000000" fontSize={20} fontFamily="Roboto-Bold">{settings.useLiveLocation.value ? 'Aan' : 'Uit'}</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.horizontalLine} />
        </View>
      </SafeAreaView>
      <StatusBar style="dark" />
    </>
  );
}

export default SettingsScreen;
