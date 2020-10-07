import React, { useEffect } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import Header from '../components/Header';
import CurrentTempDisplay from '../components/CurrentTempDisplay';
import Text from '../components/Text';

import { fetchWeatherData } from '../state/actions/weatherActions';
import { getCurrentLocation } from '../state/selectors/locationSelectors';

import { BACKGROUND_COLOR_DAY } from '../constants';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR_DAY,
  },

  errorBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
    width: 350,
    height: 150,
    borderRadius: 1,
  },
});

function MainScreen(props) {
  const dispatch = useDispatch();

  const weatherLoaded = useSelector((state) => state.weather.loaded);
  const weatherError = useSelector((state) => state.weather.error);
  const weatherErrorText = useSelector((state) => state.weather.errorText);
  const location = useSelector((state) => getCurrentLocation(state));
  const unit = useSelector((state) => state.settings.unit);

  useEffect(() => {
    dispatch(fetchWeatherData(location.name, unit));
  }, []);

  if (weatherError) {
    return (
      <SafeAreaView style={[styles.container, { justifyContent: 'center' }]}>
        <View style={styles.errorBox}>
          <Text color="#000000" fontSize={20}>
            [ ! ]  {weatherErrorText}  [ ! ]
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!weatherLoaded) {
    return (
      <SafeAreaView style={[styles.container, { justifyContent: 'center' }]}>
        <ActivityIndicator size="large" color="#f4f4f4" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={props.navigation} />
      <CurrentTempDisplay />
    </SafeAreaView>
  );
}

MainScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default MainScreen;
