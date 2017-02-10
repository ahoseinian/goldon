import {TOGGLE_CART_VISIBILITY} from '../../actions/action-types'

const visible = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_CART_VISIBILITY:
      return !state
    default:
      return state
  }
}

export default visible
