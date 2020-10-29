import { combineReducers } from 'redux';
import stateTracker from './responseTracker';
import allToursReducer from './allToursReducer'

export default combineReducers({
  selections: stateTracker,
  allTours: allToursReducer
})
