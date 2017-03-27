import React from 'react'
import {mount, shallow} from 'enzyme'
import TopBar from './TopBar'
import CartBar from './cart/CartBar'

describe('TopBar', () => {
  it('shows CartBar with location', () => {
    const wrapper = shallow(<TopBar location={{pathname:'test'}} />)
    expect(wrapper.contains(<CartBar location={{pathname:'test'}} />)).toEqual(true)
  })

  describe('location prop', function() {

    it('should exists', () => {
      const wrapper = shallow(<TopBar />)
      expect(
        console.error.called
      ).toEqual(true)
    })

    it('should be object', () => {
      const wrapper = shallow(<TopBar location='string' />)
      expect(
        console.error.called
      ).toEqual(true)
    })

    it('should have pathname', () => {
      const wrapper = shallow(<TopBar location={{}} />)
      expect(
        console.error.called
      ).toEqual(true)
    })

    it('should works fine with correct location prop', () => {
      const wrapper = shallow(<TopBar location={{pathname:'test'}} />)
      expect(
        console.error.called
      ).toEqual(false)
    })

  })
})
