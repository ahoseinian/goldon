import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import App from './App'

describe('App', () => {
  it('renders with children', () => {
    const wrapper = shallow(<App pathname="/">test</App>)
    expect(toJson(
      wrapper
    )).toMatchSnapshot()
  })
})
