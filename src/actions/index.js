import request from 'superagent';
import {SERVER_PATH} from '../config';
import {getFromServer, saveToServer} from './helpers'

export const CHANGE_INITIAL_ITEM = 'CHANGE_INITIAL_ITEM';
export function changeInitialItem(target) {
  return {type: CHANGE_INITIAL_ITEM, payload: target}
}

export const SWAP_INITIAL_ITEM = 'SWAP_INITIAL_ITEM';
export function swapInitialItem(item) {
  return {type: SWAP_INITIAL_ITEM, item}
}

export const SAVE_NEW_ITEM_FULFILLED = 'SAVE_NEW_ITEM_FULFILLED';

export const SAVE_NEW_ITEM = 'SAVE_NEW_ITEM';
export function saveNewItem(item) {
  return {
    type: SAVE_NEW_ITEM,
    payload: request.post(SERVER_PATH + '/backend/item.php').send(item)
  }
}

export const SAVE_EDITED_ITEM = 'SAVE_EDITED_ITEM';
export function saveEditedItem(item) {
  return {
    type: SAVE_EDITED_ITEM,
    payload: request.post(SERVER_PATH + '/backend/item.php').send(item)
  }
}

export const SAVE_EDITED_ITEM_FULFILLED = 'SAVE_EDITED_ITEM_FULFILLED'

export const RESET_NEW_ITEM = 'RESET_NEW_ITEM'
export function resetNewItem() {
  return {type: RESET_NEW_ITEM}
}

export const GET_ITEMS = 'GET_ITEMS'
export const getItems = getFromServer(GET_ITEMS, 'items')

export const GET_BRANDS = 'GET_BRANDS'
export const GET_BRANDS_FULFILLED = 'GET_BRANDS_FULFILLED'
export const getBrands = getFromServer(GET_BRANDS, 'brands')

export const REMOVE_ITEM = 'REMOVE_ITEM'
export const REMOVE_ITEM_FULFILLED = 'REMOVE_ITEM_FULFILLED'
export function removeItem(remove) {
  return {
    type: REMOVE_ITEM,
    payload: request.get(SERVER_PATH + '/backend/item.php').query({remove})
  }
}

export const GET_MODELS = 'GET_MODELS'
export const GET_MODELS_FULFILLED = 'GET_MODELS_FULFILLED'
export const GET_MODELS_REJECTED = 'GET_MODELS_REJECTED'
export const getModels = getFromServer(GET_MODELS, 'models')

export const SAVE_MODELS = 'SAVE_MODELS'
export const SAVE_MODELS_FULFILLED = 'SAVE_MODELS_FULFILLED'
export const saveModels = saveToServer(SAVE_MODELS, 'models')
