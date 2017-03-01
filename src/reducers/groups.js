import {combineReducers} from 'redux'
import {
  SAVE_GROUPS_FULFILLED,
  GET_GROUPS_FULFILLED,
  SAVE_GROUPS_ITEMS_FULFILLED,
  GET_GROUP_BY_ID_FULFILLED,
  REMOVE_ITEM_FROM_GROUP_FULFILLED,
  TOGGLE_SELECT_GROUP_MODAL
} from '../actions/groups'

function all(state = [], action) {
  switch (action.type) {
    case SAVE_GROUPS_FULFILLED:
    case GET_GROUPS_FULFILLED:
      return action.payload.body
    default:
      return state
  }
}

function current(state = {
  items: []
}, action) {
  switch (action.type) {
    case GET_GROUP_BY_ID_FULFILLED:
      return state = action.payload.body
    case REMOVE_ITEM_FROM_GROUP_FULFILLED:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.body.removedItemId)
      }
    case SAVE_GROUPS_ITEMS_FULFILLED:
      const newItems = [
        ...state.items,
        action.payload.body.item
      ]
      return {
        ...state,
        items: newItems
      }
    default:
      return state
  }
}

function modal(state = {
  isOpen: false,
  item: 0
}, action) {
  switch (action.type) {
    case TOGGLE_SELECT_GROUP_MODAL:
      return {
        isOpen: !state.isOpen,
        item: action.item
      }
    default:
      return state
  }
}

export default combineReducers({all, current, modal})
