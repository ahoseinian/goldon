import React from 'react'
import {shallow} from 'enzyme'
import HomeLink from './HomeLink'
import toJson from 'enzyme-to-json';

describe('HomeLink', () => {
  it('renders', () => {
    const wrapper = shallow(<HomeLink />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
