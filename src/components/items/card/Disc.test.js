import React from 'react'
import {shallow} from 'enzyme'
import Disc from './Disc'
import toJson from 'enzyme-to-json'

describe('Disc', () => {
  it('renders', () => {
    const wrapper = shallow(<Disc name="name" value="value" />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})
