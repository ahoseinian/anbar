import {combineReducers} from 'redux';
import {
  CHANGE_INITIAL_ITEM,
  SAVE_NEW_ITEM_FULFILLED,
  SWAP_INITIAL_ITEM,
  SAVE_EDITED_ITEM_FULFILLED,
  RESET_NEW_ITEM,
  GET_MODELS_FULFILLED,
  SAVE_MODELS_FULFILLED
} from './actions';

import abkariRangs from './reducers/abkariRangs'
import groups from './reducers/groups'
import alert from './reducers/alert'
import items from './reducers/items'
import brands from './reducers/brands'

const initialItem = {
  code: '',
  abkari_rang: '',
  item_model: 0,
  item_type: 0,
  foroshgah_mojodi: '',
  karkhane_mojodi: '',
  size: '',
  brand: '',
  info: ''
};

function newItem(state = initialItem, action) {
  switch (action.type) {
    case CHANGE_INITIAL_ITEM:
      state = {
        ...state,
        [action.payload.name]: action.payload.value
      }
      break;
    case SAVE_NEW_ITEM_FULFILLED:
    case SAVE_EDITED_ITEM_FULFILLED:
    case RESET_NEW_ITEM:
      state = initialItem
      break;
    case SWAP_INITIAL_ITEM:
      state = action.item
      break;
    default:
  }
  return state;
}



function models(state = [], action) {
  switch (action.type) {
    case GET_MODELS_FULFILLED:
    case SAVE_MODELS_FULFILLED:
      return action.payload.body
    default:
      return state
  }
}

const anbarApp = combineReducers({
  newItem,
  items,
  abkariRangs,
  brands,
  models,
  groups,
  alert
})

export default anbarApp
