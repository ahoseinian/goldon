import React from 'react'
import {shallow} from 'enzyme'
import CodeAndPrice from './CodeAndPrice'
import toJson from 'enzyme-to-json'

describe('CodeAndPrice', () => {
  it('renders null without price', () => {
    const wrapper = shallow(<CodeAndPrice item={{}}/>)
    expect(wrapper.html()).toEqual(null)
  })

  it('renders correctly with price', () => {
    const wrapper = shallow(<CodeAndPrice item={{price: 444}}/>)
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})
