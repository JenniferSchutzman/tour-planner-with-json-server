import { ALL_TOURS } from '../actions/types'

const initialState = {
  items: [],
  item: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ALL_TOURS:
      console.log('reducer');
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}

