import { combineReducers } from 'redux';
import setToken from './sessionInfo';
import gameReducer from './sessionInfo';

const rootReducer = combineReducers({
  setToken,
  gameReducer,
});
export default rootReducer;
