import React from 'react'
import {shallow} from 'enzyme'
import Tel from './Tel'

describe('Tel', () => {
  it('renders', () => {
    const wrapper = shallow(<Tel />)
  })

  it('renders the number', () => {
    const number = "22 44 55"
    const wrapper = shallow(<Tel number={number}/>)
    expect(wrapper.html()).toContain(number)
  })
  
})
