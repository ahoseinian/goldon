import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import Router from './Router'

describe('Router', () => {
  it('renders', () => {
    const wrapper = shallow(<Router />)
    expect(toJson(
      wrapper
    )).toMatchSnapshot()
  })
})
