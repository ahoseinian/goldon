import {combineReducers} from 'redux'
import {GET_ALL_ITEMS_FULFILLED} from '../actions/action-types'
import search from './search'
import cart from './cart'

const items = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_ITEMS_FULFILLED:
      return action.payload.body
    default:
      return state
  }
}

export default combineReducers({items, search, cart})
