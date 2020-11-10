export function setCurrentLocation(location) {
  return {
    type: 'LOCATION_SET_CURRENT',
    payload: location.id,
  };
}


export function overrideLocationState(value) {
  return {
    type: 'LOCATION_OVERRIDE_STATE',
    payload: value,
  };
}
