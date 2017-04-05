import {showInGallery} from './index'
import {SHOW_IN_GALLERY} from './action-types'

describe('showInGallery', () => {
  it('returns correct action', () => {
    const id = 'testid'
    expect(showInGallery(id)).toEqual({
      type: SHOW_IN_GALLERY,
      id
    })
  })

})
