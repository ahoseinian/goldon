import {showInGallery, closeGallery} from './index'
import {SHOW_IN_GALLERY, CLOSE_GALLERY} from './action-types'

describe('showInGallery', () => {
  it('returns correct action', () => {
    const id = 'testid'
    expect(showInGallery(id)).toEqual({
      type: SHOW_IN_GALLERY,
      id
    })
  })
})

describe('closeGallery', () => {
  it('returns correct action', () => {
    expect(closeGallery()).toEqual({type:CLOSE_GALLERY})
  })
})
