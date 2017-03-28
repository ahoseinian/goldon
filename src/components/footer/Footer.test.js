import React from 'react'
import {shallow} from 'enzyme'
import Footer from './Footer'
import toJson from 'enzyme-to-json';

describe('Footer', () => {
  it('renders', () => {
    const wrapper = shallow(<Footer />)
    expect(
      toJson(wrapper)
    ).toMatchSnapshot()
  })
})
