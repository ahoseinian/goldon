import React from 'react'
import {shallow} from 'enzyme'
import Modal from 'react-modal'
import {GalleryModal} from './GalleryModal'

describe('GalleryModal', () => {
  it('renders', () => {
    const wrapper = shallow(<GalleryModal src="test" isOpen/>)
  })

  it('has react-modal in it', () => {
    const wrapper = shallow(<GalleryModal src="test" isOpen/>)
    const modal = wrapper.find(Modal)

    expect(
      modal.length
    ).toEqual(1)

    expect(
      modal.props().isOpen
    ).toEqual(true)
  })
})
