import React from 'react'
import {shallow} from 'enzyme'
import SimpleCard from './SimpleCard'

describe('SimpleCard', () => {
  it('renders null without children', () => {
    const wrapper = shallow(<SimpleCard title=""/>)
    expect(wrapper.html()).toEqual(null)
  })

  it('renders children & title', () => {
    const children = 'SimpleCardchildren'
    const title = 'simpleCard title'
    const wrapper = shallow(<SimpleCard title={title}>{children}</SimpleCard>)
    expect(wrapper.html()).toContain(children)
    expect(wrapper.html()).toContain(title)
  });
})
