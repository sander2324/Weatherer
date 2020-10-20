import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import Header from '../components/Header';
import CurrentTempDisplay from '../components/CurrentTempDisplay';
import ErrorBox from '../components/ErrorBox';
import RefreshWeatherScroll from '../components/RefreshWeatherScroll';

import { fetchWeatherData } from '../state/actions/weatherActions';
import { getCurrentLocation } from '../state/selectors/locationSelectors';

import { BACKGROUND_COLOR_DAY } from '../constants';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR_DAY,
  },
});

function MainScreen(props) {
  const dispatch = useDispatch();

  const weatherInitialized = useSelector((state) => Boolean(state.weather.data.current));
  const weatherError = useSelector((state) => state.weather.error);
  const weatherErrorText = useSelector((state) => state.weather.errorText);
  const location = useSelector((state) => getCurrentLocation(state));
  const unit = useSelector((state) => state.settings.unit.value);

  useEffect(() => {
    dispatch(fetchWeatherData(location.name, unit));
  }, []);

  if (!weatherInitialized) {
    return (
      <SafeAreaView style={[styles.container, { justifyContent: 'center' }]}>
        <ActivityIndicator size="large" color="#f4f4f4" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <RefreshWeatherScroll>
        <Header navigation={props.navigation} />
        {weatherError ? <ErrorBox errorText={weatherErrorText} /> : <CurrentTempDisplay />}
      </RefreshWeatherScroll>
    </SafeAreaView>
  );
}

MainScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default MainScreen;
