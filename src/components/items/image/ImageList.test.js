import React from 'react'
import {shallow} from 'enzyme'
import ImageList from './ImageList'

describe('ImageList', () => {
  it('renders & returns null when images are less than two', () => {
    const wrapper = shallow(<ImageList images={['firstImage']}/>)
    expect(wrapper.html()).toEqual(null)
  })

  it('calls imageClicked on click on of images', () => {
    const imageClickedMock = jest.fn()
    const wrapper = shallow(
      <ImageList
        images={['firstImage', 'second image', 'third image']}
        imageClicked={imageClickedMock}/>
    )
    const lastImage = wrapper.find('.image-thumbnail').last()
    lastImage.simulate('click')

    expect(imageClickedMock.mock.calls[0][0]).toEqual("third image")
  })

  it('renders a list of images', () => {
    const wrapper = shallow(<ImageList images={['firstImage', 'second image', 'third image']}/>)
    expect(wrapper.find('.image-thumbnail').length).toEqual(3)
  })
})
