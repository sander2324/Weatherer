function getLiveLocationObject(state) {
  const currentWeather = state.weather.data.current;
  if (!currentWeather) return null;

  const mockLocation = {
    id: null,
    name: 'Onbekende locatie',
    countryCode: null,
    current: false,
  };

  if (!state.weather.error && !state.weather.isLoading) {
    mockLocation.name = currentWeather.name;
    mockLocation.countryCode = currentWeather.sys.country;
  }

  return mockLocation;
}


// eslint-disable-next-line import/prefer-default-export
export function getCurrentLocation(state, useLiveLocation = true) {
  if (useLiveLocation && state.settings.useLiveLocation.value) {
    return getLiveLocationObject(state);
  }

  return state.locations.find((loc) => loc.current);
}
