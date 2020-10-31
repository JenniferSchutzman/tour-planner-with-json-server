
import fetch from 'isomorphic-fetch'

import {
  ALL_TOURS,
} from './types'

const url = 'http://localhost:3001/allTours'

console.log('inside getTours function')

export const getTours = () => dispatch => {
  console.log('dispatch', dispatch)
  console.log('fetching')
  fetch(url)
    .then(res => res.json())
    .then(tours => dispatch({
      type: ALL_TOURS,
      payload: tours
    }))
    .then(res => console.log('res', res))
}

  // export const areaOfInterest = async (dispatch, getState) => {
  //   dispatch({ type: SELECTED_INTEREST, payload: {} })
  //   const interests = await fetch(`${url}/interests`).then(res => res.json())
  //   dispatch({ type: SELECTED_INTEREST, payload: interests })
  // }
