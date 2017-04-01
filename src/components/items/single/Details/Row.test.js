import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import Row from './Row'

describe('Row', () => {
  it('renders null without value', () => {
    const wrapper = shallow(<Row name="a" />)
    expect(wrapper.html()).toEqual(null)
  })

  it('renders correctly with value', () => {
    const wrapper = shallow(<Row name="a" value="test"/>)
    expect(wrapper.html().length > 0).toEqual(true)
    expect(toJson(
      wrapper
    )).toMatchSnapshot()
  })

})
