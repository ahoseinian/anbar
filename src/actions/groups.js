import {getFromServer, saveToServer} from './helpers'

export const SAVE_GROUPS = 'SAVE_GROUPS'
export const SAVE_GROUPS_FULFILLED = 'SAVE_GROUPS_FULFILLED'
export const saveGroups = saveToServer(SAVE_GROUPS, 'groups')
export const GET_GROUPS = 'GET_GROUPS'
export const GET_GROUPS_FULFILLED = 'GET_GROUPS_FULFILLED'
export const getGroups = getFromServer(GET_GROUPS, 'groups')

export const SAVE_GROUPS_ITEMS = 'SAVE_GROUPS_ITEMS'
export const SAVE_GROUPS_ITEMS_FULFILLED = 'SAVE_GROUPS_ITEMS_FULFILLED'
export const saveGroupsItems = saveToServer(SAVE_GROUPS_ITEMS, 'groups_items')

export const GET_GROUP_BY_ID = 'GET_GROUP_BY_ID'
export const GET_GROUP_BY_ID_FULFILLED = 'GET_GROUP_BY_ID_FULFILLED'
export const getGroupById = getFromServer(GET_GROUP_BY_ID, 'groups')

export const REMOVE_ITEM_FROM_GROUP = 'REMOVE_ITEM_FROM_GROUP'
export const REMOVE_ITEM_FROM_GROUP_FULFILLED = 'REMOVE_ITEM_FROM_GROUP_FULFILLED'
export const removeItemFromGroup = getFromServer(REMOVE_ITEM_FROM_GROUP, 'groups_items')

export const TOGGLE_SELECT_GROUP_MODAL = 'TOGGLE_SELECT_GROUP_MODAL'
export const toggleSelectGroupModal = item => ({type: TOGGLE_SELECT_GROUP_MODAL, item})
