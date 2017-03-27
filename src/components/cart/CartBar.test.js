import React from 'react'
import {shallow} from 'enzyme'
import CartBar from './CartBar'

describe('CartBar', () => {
  it('renders', () => {
    const wrapper = shallow(<CartBar pathname="/"/>)
    expect(
      console.error.called
    ).toEqual(false)
  })
})
