const initialState = {
  unit: 'metric',
  useLiveLocation: false,
  completedSetup: false, // TODO
};

function settingsReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }

    case 'SETTINGS_SET_UNIT': {
      return {
        ...state,
        unit: action.payload,
      };
    }

    case 'SETTINGS_SET_USE_LIVE_LOCATION': {
      return {
        ...state,
        useLiveLocation: action.payload,
      };
    }
  }
}

export default settingsReducer;
