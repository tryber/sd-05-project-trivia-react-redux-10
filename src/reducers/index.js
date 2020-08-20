import { combineReducers } from 'redux';
import setToken from './sessionInfo'

const rootReducer = combineReducers({
  setToken,
});
export default rootReducer;