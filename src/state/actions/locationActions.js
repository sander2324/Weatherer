// eslint-disable-next-line import/prefer-default-export
export function setCurrentLocation(location) {
  return {
    type: 'LOCATION_SET_CURRENT',
    payload: location.id,
  };
}
