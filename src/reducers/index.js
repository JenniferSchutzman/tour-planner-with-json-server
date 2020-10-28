import { combineReducers } from 'redux';
import stateTracker from './responseTracker';

export default combineReducers({
  selections: stateTracker
})
