import fetch from 'isomorphic-fetch'

import {
  ALL_TOURS,
} from './types'

const url = 'http://localhost:3000'

export const getTours = () => dispatch => {
  fetch(url)
    .then(res => res.json())
    .then(tours => dispatch({
      type: ALL_TOURS,
      payload: tours
    }))
}

  // export const areaOfInterest = async (dispatch, getState) => {
  //   dispatch({ type: SELECTED_INTEREST, payload: {} })
  //   const interests = await fetch(`${url}/interests`).then(res => res.json())
  //   dispatch({ type: SELECTED_INTEREST, payload: interests })
  // }
