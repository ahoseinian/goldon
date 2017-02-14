import {GET_ALL_ITEMS_FULFILLED} from '../../actions/action-types'
const items = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_ITEMS_FULFILLED:
      return action.payload.body
    default:
      return state
  }
}

export default items
