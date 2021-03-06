import React from 'react'
import {shallow} from 'enzyme'
import Image from './Image'

describe('Image', () => {
  it('renders', () => {
    const wrapper = shallow(<Image id="1f356"/>)
    expect(wrapper.html()).toContain('1f356.jpg')
  })

  it('calls onClick handler', () => {
    const zoomFunc = jest.fn()
    const wrapper = shallow(<Image id="1f356" handleZoom={zoomFunc}/>)
    wrapper.simulate('click')
    expect(zoomFunc.mock.calls.length).toEqual(1)
  })

  it('does not throw error when clicked without click handler', () => {
    const wrapper = shallow(<Image id="1f356"/>)
    wrapper.simulate('click')
    expect(console.error.called).toEqual(false)
  })
})
