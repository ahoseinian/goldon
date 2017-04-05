import request from 'superagent'
import {
  GET_ALL_ITEMS,
  SET_SEARCH_VALUE,
  ADD_ITEM_TO_CART,
  TOGGLE_CART_VISIBILITY,
  REMOVE_FROM_CART,
  COMPLETE_CART_ORDER,
  RESET_SEARCH,
  SHOW_IN_GALLERY
} from './action-types'

export const getAllItems = () => ({
  type: GET_ALL_ITEMS,
  payload: request.get('/api')
})

export const setSearchValue = (field, payload) => ({type: SET_SEARCH_VALUE, field, payload})
export const addItemToCart = (item) => ({type: ADD_ITEM_TO_CART, item})
export const toggleCartVisibility = () => ({type: TOGGLE_CART_VISIBILITY})
export const removeFromCart = (item) => ({type: REMOVE_FROM_CART, item})
export const resetSearch = () => ({type: RESET_SEARCH})
export const completeCartOrder = (data) => ({
  type: COMPLETE_CART_ORDER,
  payload: request
    .post('/api/cart')
    .send(data)
})

export const showInGallery = (id) => ({
  type: SHOW_IN_GALLERY,
  id
})
