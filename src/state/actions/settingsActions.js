export function setUseLiveLocation(value) {
  return {
    type: 'SETTINGS_SET_USE_LIVE_LOCATION',
    payload: value,
  };
}


export function overrideSettingsState(value) {
  return {
    type: 'SETTINGS_OVERRIDE_STATE',
    payload: value,
  };
}
