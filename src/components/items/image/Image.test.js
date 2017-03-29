import React from 'react'
import {shallow} from 'enzyme'
import Image from './Image'

describe('Image', () => {
  it('renders', () => {
    const wrapper = shallow(<Image id="1f356"/>)
    expect(wrapper.html()).toContain('1f356.jpg')
  })
})
