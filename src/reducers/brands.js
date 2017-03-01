import {GET_BRANDS_FULFILLED} from '../actions'

function all(state = {all: [], used: []}, action) {
  switch (action.type) {
    case GET_BRANDS_FULFILLED:
      return action.payload.body
    default:
      return state
  }
}



export default all
