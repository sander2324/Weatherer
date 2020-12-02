export function setCurrentLocation(location) {
  return {
    type: 'LOCATION_SET_CURRENT',
    payload: location.id,
  };
}


export function addLocation(name, countryCode) {
  return (dispatch, getState) => {
    const { locations } = getState();

    const locationsSortedByIdDescending = [...locations].sort((a, b) => b.id - a.id);
    const newId = locationsSortedByIdDescending[0].id + 1;

    return dispatch({
      type: 'LOCATION_ADD',
      payload: {
        id: newId,
        name: name,
        countryCode: countryCode,
        current: false,
      },
    });
  };
}


export function overrideLocationState(value) {
  return {
    type: 'LOCATION_OVERRIDE_STATE',
    payload: value,
  };
}
