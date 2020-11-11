import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { StatusBar } from 'expo-status-bar';

import CenteredSettingItem from '../components/CenteredSettingItem';
import globalStyles from '../globalStyles';
import { setCurrentLocation } from '../state/actions/locationActions';


function LocationScreen(props) {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.locations.filter((loc) => !loc.live));

  const locationsSortedById = [...locations].sort((a, b) => a.id - b.id);
  const locationsDisplay = locationsSortedById.map((location) => (
    <View key={location.id}>
      <CenteredSettingItem
        onPress={() => dispatch(setCurrentLocation(location))}
        content={`${location.name}, ${location.countryCode}`}
        boldText={location.current}
      />
      <View style={globalStyles.horizontalLine} />
    </View>
  ));

  return (
    <>
      <SafeAreaView>
        <ScrollView style={globalStyles.settingsContainer}>
          {locationsDisplay}
          <CenteredSettingItem
            onPress={() => props.navigation.navigate('Locations Add')}
            content="Voeg een plaats toe"
            boldText={false}
          />
          <View style={globalStyles.horizontalLine} />
        </ScrollView>
      </SafeAreaView>
      <StatusBar style="dark" />
    </>
  );
}

LocationScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default LocationScreen;
