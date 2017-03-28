import React from 'react'
import {shallow} from 'enzyme'
import {Home} from './Home'
import toJson from 'enzyme-to-json'

describe('Home', () => {
  it('renders', () => {
    const wrapper = shallow(<Home items={[]}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders items', () => {
    const items = [
      {id:1, images:[]},
      {id:2, images:[]},
    ]
    const wrapper = shallow(<Home items={items}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})
