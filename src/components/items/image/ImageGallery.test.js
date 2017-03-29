import React from 'react'
import {shallow} from 'enzyme'
import ImageGallery from './ImageGallery'
import Image from './Image'
import ImageList from './ImageList'

const images = ['first Image', 'secondImage']
describe('ImageGallery', () => {
  it('renders first Image', () => {
    const wrapper = shallow(<ImageGallery images={images} />)
    expect(wrapper.find(Image).first().props().id).toEqual(images[0])
  })

  it('changes the image', () => {
    const wrapper = shallow(<ImageGallery images={images} />)
    wrapper.instance().imageClicked('test')
    expect(wrapper.find(Image).first().props().id).toEqual('test')
  })

  it('renders ImageList correctly', () => {
    const wrapper = shallow(<ImageGallery images={images} />)
    const listProps = wrapper.find(ImageList).first().props()
    expect(listProps.images).toEqual(images)
  })

})
