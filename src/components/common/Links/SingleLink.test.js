import React from 'react'
import {shallow} from 'enzyme'
import SingleLink from './SingleLink'

describe('SingleLink', () => {

  it('renders null without name', () => {
    const wrapper = shallow(<SingleLink  name="" url=""/>)
    expect(wrapper.html()).toEqual(null)
  })

  it('renders link name and url', () => {
    const wrapper = shallow(<SingleLink  name="linkname" url="linkurl"/>)
    expect(wrapper.html()).toContain("linkname")
    expect(wrapper.html()).toContain("linkurl")
  })

})
