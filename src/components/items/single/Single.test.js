import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import {Helmet} from 'react-helmet'
import {Single} from './Single'

const item = {
  name: 'item name',
  images: []
}

describe('Single', () => {
  it('does not renders similarItems without them', () => {
    const wrapper = shallow(<Single item={item}/>)
    expect(toJson(
      wrapper
    )).toMatchSnapshot();
  })

  it('renders similarItems', () => {
    const wrapper = shallow(<Single item={item} similarItems={[{}]}/>)
    expect(toJson(
      wrapper.find('.similar-items')
    )).toMatchSnapshot();
  })

  it('scrolls to zero position')

  it('changes document title', () => {
    const wrapper = shallow(<Single item={item} similarItems={[{}]}/>)
    expect(wrapper.find(Helmet).find('title').text()).toEqual('item name')
  })
})
