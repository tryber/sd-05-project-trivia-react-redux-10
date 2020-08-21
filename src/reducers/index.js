import { combineReducers } from 'redux';
import setToken from './sessionInfo';
import gameReducer from './gameReducer';

const rootReducer = combineReducers({
  setToken,
  gameReducer,
});
export default rootReducer;
