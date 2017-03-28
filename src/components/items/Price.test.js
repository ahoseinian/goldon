import React from 'react'
import {shallow} from 'enzyme'
import Price from './Price'

describe('Price', () => {
  it('renders', () => {
    const wrapper = shallow(<Price value={10}/>)
    expect(wrapper.html()).toContain(10)
  })
})
