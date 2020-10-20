import React from 'react';
import { ScrollView, RefreshControl } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { fetchWeatherData } from '../state/actions/weatherActions';
import { getCurrentLocation } from '../state/selectors/locationSelectors';


function RefreshWeatherScroll(props) {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.weather.isLoading);
  const location = useSelector((state) => getCurrentLocation(state));
  const unit = useSelector((state) => state.settings.unit.value);

  const updateWeather = () => dispatch(fetchWeatherData(location.name, unit));

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={() => updateWeather()} />
      }
    >
      {props.children}
    </ScrollView>
  );
}

RefreshWeatherScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RefreshWeatherScroll;
