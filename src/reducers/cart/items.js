import {ADD_ITEM_TO_CART, REMOVE_FROM_CART, COMPLETE_CART_ORDER_FULFILLED} from '../../actions/action-types'
import unionBy from 'lodash.unionby'
import Item from './itemClass'

const isEqual = (item) => (x) => x.id === item.id
const addOne = (value) => value
  ? value + 1
  : 1

const unionItems = (items, newItem) => {
  const item = items.find(isEqual(newItem)) || newItem
  const changedItem = {
    ...item,
    quantity: addOne(item.quantity)
  }
  return unionBy([changedItem], items, 'id')
}

//TODO refactor here
const defaultState = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const items = (state = defaultState, action) => {
  let newItems
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      newItems = unionItems(state, new Item(action.item));
      break;
    case REMOVE_FROM_CART:
      newItems = state.filter((x) => action.item.id !== x.id);
      break;
    case COMPLETE_CART_ORDER_FULFILLED:
      newItems = [];
      break;
    default:
      newItems = state;
  }
  localStorage.setItem("cartItems", JSON.stringify(newItems))
  return newItems
}

export default items
