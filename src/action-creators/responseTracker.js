import fetch from 'isomorphic-fetch'

import {
  SELECTED_INTEREST,
} from '../constants'

const url = 'http://localhost:5000'

export const areaOfInterest = async (dispatch, getState) => {
  dispatch({ type: SELECTED_INTEREST, payload: {} })
  const interests = await fetch(`${url}/interests`).then(res => res.json())
  dispatch({ type: SELECTED_INTEREST, payload: interests })
}

// export const home = async (dispatch, getState) ={
//   const home = await fetch(`${url}/`).then(res => res.json())
//   dispatch({type: START_OVER, payload: home})
// }

// export const selectInterest = async (dispatch, getState) => {
//   // dispatch({ type: SELECTED_HISTORY, payload: {} })
//   const history = await fetch(`${url}/interests/History`).then(res =>
//     res.json()
//   )
//   dispatch({ type: SELECTED_HISTORY })
// }
