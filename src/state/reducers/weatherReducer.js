const initialState = {
  data: {
    current: null,
    week_forecast: null,
  },
  loaded: false,
  lastUpdated: null,
  error: false,
  errorText: '',
};

function weatherReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }

    case 'WEATHER_SET_DATA': {
      return {
        ...state,
        data: action.payload.data,
        lastUpdated: action.payload.lastUpdated,
        loaded: true,
      };
    }

    case 'WEATHER_SET_LOADED': {
      return {
        ...state,
        loaded: action.payload,
      };
    }

    case 'WEATHER_SET_ERROR': {
      return {
        ...state,
        error: true,
        errorText: action.payload.errorText,
      };
    }

    case 'WEATHER_CLEAR_ERROR': {
      return {
        ...state,
        error: false,
        errorText: '',
      };
    }
  }
}

export default weatherReducer;
