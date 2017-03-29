import React from 'react'
import {shallow} from 'enzyme'
import SmallImage from './SmallImage'

describe('SmallImage', () => {
  it('renders correct image', () => {
    const wrapper = shallow(<SmallImage id='1ft3t'/>)
    expect(wrapper.find('img').first().props().src).toContain('1ft3t.jpg')
  })
})
