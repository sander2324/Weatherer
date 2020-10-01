import Constants from 'expo-constants';


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

export function setWeatherLoaded(loadingState) {
  return {
    type: 'WEATHER_SET_LOADED',
    payload: loadingState,
  };
}

export const clearWeatherError = () => ({ type: 'WEATHER_CLEAR_ERROR' });

async function fetchCurrentWeatherData(city, unit) {
  const apiKey = Constants.manifest.extra.owmApiKey;

  let response;
  try {
    response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`);
  } catch (e) {
    return [null, true];
  }

  if (!response.ok) {
    return [null, true];
  }

  const data = await response.json();
  return [data, false];
}

export function fetchWeatherData(city, unit) {
  return async (dispatch) => {
    dispatch(setWeatherLoaded(false));
    const [currentWeatherData, currentWeatherDataError] = await fetchCurrentWeatherData(city, unit);
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
