import {combineReducers} from 'redux'
import * as abkariRangsActions from '../actions/abkariRangs'

function all(state = [], action) {
  switch (action.type) {
    case abkariRangsActions.SAVE_ABKARI_RANG_FULFILLED:
    case abkariRangsActions.GET_ABKARI_RANGS_FULFILLED:
    case abkariRangsActions.REMOVE_ABKARI_RANG_FULFILLED:
      state = action.payload.body
      break;
    default:
  }
  return state
}

function current(state = {
  name: ''
}, action) {
  switch (action.type) {
    case abkariRangsActions.SET_CURRENT_ABKARI_RANG_ITEM:
      return {
        ...action.item
      }
    case abkariRangsActions.CHANGE_CURRENT_ABKARI_RANG_ITEM:
      return {
        ...state,
        name: action.name
      }
    case abkariRangsActions.SAVE_ABKARI_RANG_FULFILLED:
      return {name: ''}
    default:
      return state

  }
}

export default combineReducers({all, current})
