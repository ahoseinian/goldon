import {ADD_ITEM_TO_CART, REMOVE_FROM_CART} from '../../actions/action-types'
import unionBy from 'lodash.unionby'

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

const items = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return unionItems(state, action.item)
    case REMOVE_FROM_CART:
      return state.filter((x) => action.item.id !== x.id)
    default:
      return state
  }
}

export default items
