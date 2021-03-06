import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import Header from '../components/Header';
import ExtraWeatherInfo from '../components/ExtraWeatherInfo';
import CurrentTempDisplay from '../components/CurrentTempDisplay';
import ErrorBox from '../components/ErrorBox';
import RefreshWeatherScroll from '../components/RefreshWeatherScroll';

import { fetchWeatherData } from '../state/actions/weatherActions';

import { BACKGROUND_COLOR_DAY } from '../constants';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR_DAY,
  },
  spacer: {
    marginBottom: 75,
  },
});

function MainScreen(props) {
  const dispatch = useDispatch();

  const weatherInitialized = useSelector((state) => Boolean(state.weather.data.current));
  const weatherError = useSelector((state) => state.weather.error);
  const weatherErrorText = useSelector((state) => state.weather.errorText);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => dispatch(fetchWeatherData()));
    return unsubscribe;
  }, [props.navigation]);

  if (!weatherInitialized && !weatherError) {
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
        {weatherError ? <ErrorBox errorText={weatherErrorText} /> : (
          <>
            <CurrentTempDisplay />
            <View style={styles.spacer} />
            <ExtraWeatherInfo />
          </>
        )}
      </RefreshWeatherScroll>
    </SafeAreaView>
  );
}

MainScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default MainScreen;
