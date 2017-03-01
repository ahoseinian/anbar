import {getFromServer, saveToServer} from './helpers'

export const GET_ABKARI_RANGS = 'GET_ABKARI_RANGS'
export const GET_ABKARI_RANGS_FULFILLED = 'GET_ABKARI_RANGS_FULFILLED'
export const getAbkariRangs = getFromServer(GET_ABKARI_RANGS, 'abkari_rangs')

export const SAVE_ABKARI_RANG = 'SAVE_ABKARI_RANG'
export const saveAbkariRangs = saveToServer(SAVE_ABKARI_RANG, 'abkari_rangs')
export const SAVE_ABKARI_RANG_FULFILLED = 'SAVE_ABKARI_RANG_FULFILLED'

export const REMOVE_ABKARI_RANG = 'REMOVE_ABKARI_RANG'
export const removeAbkariRang = getFromServer(REMOVE_ABKARI_RANG, 'abkari_rangs')
export const REMOVE_ABKARI_RANG_REJECTED = 'REMOVE_ABKARI_RANG_REJECTED'
export const REMOVE_ABKARI_RANG_FULFILLED = 'REMOVE_ABKARI_RANG_FULFILLED'

export const SET_CURRENT_ABKARI_RANG_ITEM = 'SET_CURRENT_ABKARI_RANG_ITEM'
export const CHANGE_CURRENT_ABKARI_RANG_ITEM = 'CHANGE_CURRENT_ABKARI_RANG_ITEM'
export const setCurrentItem = item => ({type: SET_CURRENT_ABKARI_RANG_ITEM, item})
export const changeCurrentItem = name => ({type: CHANGE_CURRENT_ABKARI_RANG_ITEM, name})
