import { getCurrentLocation } from '../selectors/locationSelectors';
import { getWeatherApiUrl } from '../../utils';

const FETCH_ERROR_MESSAGE = 'Kon weerdata niet ophalen';


export function setWeatherData(data) {
  return {
    type: 'WEATHER_SET_DATA',
    payload: {
      data: data,
      lastUpdated: new Date(),
    },
  };
}

export function setWeatherError(errorText) {
  return {
    type: 'WEATHER_SET_ERROR',
    payload: { errorText: errorText },
  };
}

export function setWeatherisLoading(loadingState) {
  return {
    type: 'WEATHER_SET_IS_LOADING',
    payload: loadingState,
  };
}

export const clearWeatherError = () => ({ type: 'WEATHER_CLEAR_ERROR' });

async function fetchCurrentWeatherData(settings, storedLocation) {
  const url = await getWeatherApiUrl(storedLocation, settings);

  if (!url) {
    return [null, true];
  }

  let response;
  try {
    response = await fetch(url);
  } catch (e) {
    return [null, true];
  }

  if (!response.ok) {
    return [null, true];
  }

  const data = await response.json();
  return [data, false];
}

export function fetchWeatherData() {
  return async (dispatch, getState) => {
    dispatch(setWeatherisLoading(true));
    const state = getState();
    const location = getCurrentLocation(state);

    const [currentWeatherData, currentWeatherDataError] = await fetchCurrentWeatherData(
      location,
      state.settings,
    );
    // TODO: Get forecastWeatherData

    if (currentWeatherDataError) {
      return dispatch(setWeatherError(FETCH_ERROR_MESSAGE));
    }

    dispatch(clearWeatherError());

    return dispatch(setWeatherData({
      current: currentWeatherData,
      week_forecast: null,
    }));
  };
}
