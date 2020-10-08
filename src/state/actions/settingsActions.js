// eslint-disable-next-line import/prefer-default-export
export function setUseLiveLocation(value) {
  return {
    type: 'SETTINGS_SET_USE_LIVE_LOCATION',
    payload: value,
  };
}
