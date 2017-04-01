import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import {Single} from './Single'

describe('Single', () => {
  it('does not renders similarItems without them', () => {
    const wrapper = shallow(<Single item={{images:[]}}/>)
    expect(toJson(
      wrapper
    )).toMatchSnapshot();
  })

  it('renders similarItems', () => {
    const wrapper = shallow(<Single item={{images:[]}} similarItems={[{}]}/>)
    expect(toJson(
      wrapper.find('.similar-items')
    )).toMatchSnapshot();
  })

  it('scrolls to zero position')
})