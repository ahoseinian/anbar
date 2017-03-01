import {SERVER_PATH} from '../config'
import request from 'superagent'

export function getFromServer(type, table) {
  return function(query) {
    return {
      type,
      payload: request.get(SERVER_PATH + '/backend/' + table + '.php').query(query)
    }
  }
}

export function saveToServer(type, table) {
  return function(data) {
    return {
      type,
      payload: request.post(SERVER_PATH + '/backend/' + table + '.php').send(data)
    }
  }
}
