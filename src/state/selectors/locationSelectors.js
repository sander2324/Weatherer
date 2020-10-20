// eslint-disable-next-line import/prefer-default-export
export function getCurrentLocation(state, useLiveLocation = true) {
  if (useLiveLocation && state.settings.useLiveLocation.value) {
    return state.locations.find((loc) => loc.live);
  }

  return state.locations.find((loc) => loc.current);
}
