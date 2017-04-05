import gallery from './gallery'
import {showInGallery, closeGallery} from '../actions'

describe('gallery reducer', () => {
  const defaultState = {isOpen: false, id: null}
  it('returns default state', () => {
    expect(
      gallery(defaultState, {type: 'unexpected'})
    ).toEqual(defaultState)
  })

  it('changes the state after dispatching showInGallery', () => {
    expect(
      gallery( defaultState, showInGallery('2fffgg') )
    ).toEqual({
      isOpen: true,
      id: '2fffgg'
    })
  })

  it('falsify isOpen after dispatching closeGallery', () => {
    expect(
      gallery( defaultState, closeGallery() )
    ).toEqual(
      {isOpen: false, id: null}
    )
  })
})
