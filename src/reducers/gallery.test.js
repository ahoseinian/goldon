import gallery from './gallery'
import {showInGallery} from '../actions'

describe('gallery reducer', () => {
  const defaultState = {isOpen: false, id: null}
  it('returns default state', () => {
    expect(
      gallery(defaultState, {type: 'unexpected'})
    ).toEqual(defaultState)
  })

  it('changes the state after dispatching showInGallery', () => {
    expect(
      gallery(
        defaultState,
        showInGallery('2fffgg')
      )
    ).toEqual({
      isOpen: true,
      id: '2fffgg'
    })
  })
})
