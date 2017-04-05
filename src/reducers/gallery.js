import {SHOW_IN_GALLERY, CLOSE_GALLERY} from '../actions/action-types'

export default function gallery(state, action) {
  switch (action.type) {
    case SHOW_IN_GALLERY:
      return {isOpen: true, id: action.id}
    case CLOSE_GALLERY:
      return {...state, isOpen: false}
    default:
      return state
  }
}
