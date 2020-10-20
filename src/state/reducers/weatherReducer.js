const initialState = {
  data: {
    current: null,
    week_forecast: null,
  },
  isLoading: false,
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
        isLoading: false,
      };
    }

    case 'WEATHER_SET_IS_LOADING': {
      return {
        ...state,
        isLoading: action.payload,
      };
    }

    case 'WEATHER_SET_ERROR': {
      return {
        ...state,
        error: true,
        errorText: action.payload.errorText,
        isLoading: false,
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
