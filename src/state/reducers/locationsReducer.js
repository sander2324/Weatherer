const initialState = [
  {
    id: 1,
    name: 'Zwolle',
    current: true,
    live: false,
  },
  {
    id: 2,
    name: 'Bristol',
    current: false,
    live: true,
  },
];


function locationsReducer(state = initialState, action) {
  switch (action.payload) {
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
