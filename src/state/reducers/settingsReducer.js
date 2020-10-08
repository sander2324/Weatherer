const initialState = {
  useLiveLocation: {
    value: false,
    displayName: 'Live locatie',
    onSettingsPage: true,
  },
  unit: {
    value: 'metric',
    displayName: 'Eenheden',
    onSettingsPage: true,
  },
  completedSetup: {
    value: false,
    displayName: null,
    onSettingsPage: false,
  }, // TODO
};

function settingsReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }

    case 'SETTINGS_SET_UNIT': {
      return {
        ...state,
        unit: {
          ...state.unit,
          value: action.payload,
        },
      };
    }

    case 'SETTINGS_SET_USE_LIVE_LOCATION': {
      return {
        ...state,
        useLiveLocation: {
          ...state.useLiveLocation,
          value: action.payload,
        },
      };
    }
  }
}

export default settingsReducer;
