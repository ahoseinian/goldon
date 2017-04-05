import React from 'react'
import {shallow} from 'enzyme'
import Modal from 'react-modal'
import {GalleryModal, mapStateToProps} from './GalleryModal'

describe('GalleryModal', () => {
  it('renders', () => {
    const wrapper = shallow(<GalleryModal src="test" isOpen closeGallery={jest.fn()}/>)
  })

  it('has react-modal in it', () => {
    const wrapper = shallow(<GalleryModal src="test" isOpen closeGallery={jest.fn()}/>)
    const modal = wrapper.find(Modal)

    expect(
      modal.length
    ).toEqual(1)

    expect(
      modal.props().isOpen
    ).toEqual(true)
  })

  it('has a image with source on it', () => {
    const wrapper = shallow(<GalleryModal src="test" isOpen closeGallery={jest.fn()}/>)
    expect(wrapper.find('.gallery-image').length).toEqual(1)
  })

  it('sends close gallery prop to react-modal', () => {
    const closeGalleryFunc = jest.fn()
    const wrapper = shallow(<GalleryModal src="test" isOpen closeGallery={closeGalleryFunc}/>)
    const modal = wrapper.find(Modal)
    expect(modal.props().onRequestClose).toEqual(closeGalleryFunc)
  })
})

describe('mapStateToProps', () => {
  it('has src and isOpen props', () => {
    const state = {
      gallery: { id: 'test', isOpen: true }
    }
    expect(mapStateToProps(state)).toEqual({
      src:'/images/original/' + state.gallery.id + '.jpg',
      isOpen: true
    })
  })

})
