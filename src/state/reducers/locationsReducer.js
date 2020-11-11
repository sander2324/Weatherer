const initialState = [
  {
    id: 1,
    name: 'Zwolle',
    countryCode: 'NL',
    current: true,
    live: false,
  },
  {
    id: 2,
    name: 'Bristol',
    countryCode: 'UK',
    current: false,
    live: true,
  },
  {
    id: 3,
    name: 'Deventer',
    countryCode: 'NL',
    current: false,
    live: false,
  },
  {
    id: 4,
    name: 'Boston',
    countryCode: 'US',
    current: false,
    live: false,
  },
];


function locationsReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }

    case 'LOCATION_OVERRIDE_STATE': {
      return action.payload;
    }

    case 'LOCATION_ADD': {
      return [
        ...state,
        action.payload,
      ];
    }

    case 'LOCATION_REMOVE': {
      return state.filter((location) => location.id !== action.payload);
    }

    case 'LOCATION_SET_CURRENT': {
      return state.map((location) => {
        location.current = location.id === action.payload;
        return location;
      });
    }
  }
}

export default locationsReducer;
