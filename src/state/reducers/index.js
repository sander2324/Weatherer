import { combineReducers } from 'redux';

import locationsReducer from './locationsReducer';
import settingsReducer from './settingsReducer';
import weatherReducer from './weatherReducer';


const rootReducer = combineReducers({
  locations: locationsReducer,
  settings: settingsReducer,
  weather: weatherReducer,
});

export default rootReducer;
