import {REMOVE_ITEM_FULFILLED} from '../actions'
import {SAVE_GROUPS_ITEMS_FULFILLED, SAVE_NEW_ITEM_FULFILLED, SAVE_EDITED_ITEM_FULFILLED} from '../actions/groups'
const ITEM_PER_PAGE = 8

const items = (state = [], action) => {
  switch (action.type) {
    case SAVE_NEW_ITEM_FULFILLED:
      return state.concat([action.payload.body]);
    case 'GET_ITEMS_FULFILLED':
      return action.payload.body;
    case SAVE_EDITED_ITEM_FULFILLED:
      return state.map(item => {
        if (item.id === action.payload.body.id) {
          return action.payload.body
        }
        return item
      })
    case SAVE_GROUPS_ITEMS_FULFILLED:
      return state.map(item => {
        if (item.id === action.payload.body.item.id) {
          return action.payload.body.item
        }
        return item
      })
    case REMOVE_ITEM_FULFILLED:
      return state.filter(item => {
        return item.id !== action.payload.body.id
      });
    default:
      return state
  }
}

export default items;

export const getPageCount = (items) => items.length / ITEM_PER_PAGE
export const getItemsInPage = (items, page) => {
  const start = page * ITEM_PER_PAGE
  const end = start + ITEM_PER_PAGE
  const slicedItems = items.slice(start, end)
  return slicedItems.length
    ? slicedItems
    : items.slice(0, 4)
}
