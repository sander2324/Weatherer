import React, { useState, useEffect } from 'react';
import { ScrollView, RefreshControl } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { fetchWeatherData } from '../state/actions/weatherActions';


function RefreshWeatherScroll(props) {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.weather.isLoading);

  const [spinnerActivated, setSpinnerActivated] = useState(false);

  useEffect(() => {
    if (!isLoading && spinnerActivated) setSpinnerActivated(false);
  }, [isLoading]);

  const updateWeather = () => {
    setSpinnerActivated(true);
    dispatch(fetchWeatherData());
  };

  return (
    <ScrollView
      refreshControl={(
        <RefreshControl
          progressViewOffset={30}
          refreshing={spinnerActivated && isLoading}
          onRefresh={() => updateWeather()}
        />
      )}
    >
      {props.children}
    </ScrollView>
  );
}

RefreshWeatherScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RefreshWeatherScroll;
