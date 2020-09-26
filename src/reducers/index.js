import { combineReducers } from 'redux';

import responseTrackerReducer from './responseTracker'

// import filtersReducer from '../features/filters/filtersReducer';
// import todosReducer from '../features/todos/todosReducer';

export default combineReducers({
  stateTracker: responseTrackerReducer,
});