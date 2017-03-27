import React from 'react'
import {mount, shallow} from 'enzyme'
import TopBar from './TopBar'
import CartBar from './cart/CartBar'

describe('TopBar', () => {
  it('shows CartBar with location', () => {
    const wrapper = shallow(<TopBar pathname="test" />)
    expect(wrapper.contains(<CartBar pathname="test" />)).toEqual(true)
  })

  describe('location prop', function() {

    it('should be string', () => {
      const wrapper = shallow(<TopBar pathname='string' />)
      expect(
        console.error.called
      ).toEqual(false)
    })

    it('should works fine with correct location prop', () => {
      const wrapper = shallow(<TopBar pathname="test" />)
      expect(
        console.error.called
      ).toEqual(false)
    })

  })
})
