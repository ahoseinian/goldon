import {SET_SEARCH_VALUE, RESET_SEARCH} from '../actions/action-types'
import omit from 'lodash.omit'

const defaultState = {}
const search = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      if (action.payload) {
        return {
          ...state,
          [action.field]: action.payload.value
        }
      } else {
        return omit(state, action.field)
      }
    case RESET_SEARCH:
      return {}
    default:
      return state
  }
}

export default search

export const getSearchedItems = (items, search) => {
  if (search.model)
    return items.filter(x => x.model === search.model)
  return items
}
