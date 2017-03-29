import React from 'react'
import {shallow} from 'enzyme'
import PriceRow from './PriceRow'
import toJson from 'enzyme-to-json'

describe('PriceRow', () => {
  it('renders null without price', () => {
    const wrapper = shallow(<PriceRow />)
    expect(wrapper.html()).toEqual(null);
  })

  it('renders with price', () => {
    const wrapper = shallow(<PriceRow price={123}/>)
    expect(wrapper.html()).toContain('123');
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
