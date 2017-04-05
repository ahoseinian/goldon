import {combineReducers} from 'redux'
import search from './search'
import cart from './cart'
import items from './items'
import gallery from './gallery'

export default combineReducers({items, search, cart, gallery})
