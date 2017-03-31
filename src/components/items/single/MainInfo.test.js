import React from 'react'
import {shallow} from 'enzyme'
import MainInfo from './MainInfo'
import toJson from 'enzyme-to-json'


describe('MainInfo', () => {
  it('renders', () => {
    const wrapper = shallow(<MainInfo item={{name:'test item'}} />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})
