import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  View,
} from 'react-native';

import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import CenteredSettingItem from '../components/CenteredSettingItem';
import globalStyles from '../globalStyles';
import { addLocation } from '../state/actions/locationActions';


const styles = StyleSheet.create({
  inputAreaContainer: {
    display: 'flex',
    marginTop: 30,
    alignItems: 'center',
  },
  inputFormContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    width: '90%',
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    backgroundColor: '#f9f9f9',
  },
  inputForm: {
    fontFamily: 'Roboto',
    height: '100%',
  },
});


function LocationAddScreen(props) {
  const dispatch = useDispatch();

  const [locationInput, setLocationInput] = useState('');
  const [locations, setLocations] = useState([]);

  const handleLocationClick = (location) => {
    dispatch(addLocation(location.name, location.sys.country, false));
    props.navigation.goBack();
  };

  useEffect(() => {
    const timeout = setTimeout(async () => {
      // Openweathermap doesn't list this API endpoint on their docs as far is I know.
      // The owm website uses this url endpoint (with this specific API key included,
      // my own doesn't even work) when you search for a place.
      const response = await fetch(`https://openweathermap.org/data/2.5/find?q=${locationInput}&appid=439d4b804bc8187953eb36d2a8c26a02`);
      if (response.status !== 200) {
        setLocations([]);
        return;
      }

      const json = await response.json();
      setLocations(json.list);
    }, 500);

    return () => clearTimeout(timeout);
  }, [locationInput]);

  const locationsDisplay = locations.map((location) => (
    <View key={location.id}>
      <CenteredSettingItem
        onPress={() => handleLocationClick(location)}
        content={`${location.name}, ${location.sys.country}`}
      />
      <View style={globalStyles.horizontalLine} />
    </View>
  ));

  return (
    <SafeAreaView>
      <View style={styles.inputAreaContainer}>
        <View style={styles.inputFormContainer}>
          <TextInput
            value={locationInput}
            onChangeText={(text) => setLocationInput(text)}
            style={styles.inputForm}
          />
        </View>
      </View>
      <ScrollView>
        {locationsDisplay}
      </ScrollView>
    </SafeAreaView>
  );
}

LocationAddScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default LocationAddScreen;
