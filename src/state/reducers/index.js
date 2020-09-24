import { combineReducers } from 'redux';

import locationsReducer from './locationsReducer';
import settingsReducer from './settingsReducer';


const rootReducer = combineReducers({
  locations: locationsReducer,
  settings: settingsReducer,
});

export default rootReducer;
