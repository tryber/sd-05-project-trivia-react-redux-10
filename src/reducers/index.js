import { combineReducers } from 'redux';
import setToken from './sessionInfo';
import gameReducer from './gameReducer';
import settingsReducer from './settingsReducer'

const rootReducer = combineReducers({
  setToken,
  gameReducer,
  settingsReducer,
});
export default rootReducer;
