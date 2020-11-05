import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import { StatusBar } from 'expo-status-bar';

import Text from '../components/Text';
import globalStyles from '../globalStyles';
import { setCurrentLocation } from '../state/actions/locationActions';


function LocationScreen() {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.locations.filter((loc) => !loc.live));

  const locationsDisplay = locations.map((location) => (
    <View key={location.id}>
      <TouchableWithoutFeedback
        onPress={() => dispatch(setCurrentLocation(location))}
      >
        <View style={[globalStyles.setting, globalStyles.justifyCenter]}>
          <Text
            color="#000000"
            fontSize={20}
            fontFamily={location.current ? 'Roboto-Bold' : 'Roboto'}
          >
            {location.name}
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={globalStyles.horizontalLine} />
    </View>
  ));

  return (
    <>
      <SafeAreaView>
        <View style={globalStyles.settingsContainer}>
          {locationsDisplay}
        </View>
      </SafeAreaView>
      <StatusBar style="dark" />
    </>
  );
}

export default LocationScreen;
