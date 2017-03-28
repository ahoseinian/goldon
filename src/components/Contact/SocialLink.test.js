import React from 'react'
import {shallow} from 'enzyme'
import SocialLink from './SocialLink'
import toJson from 'enzyme-to-json';

const item = {
  url: 'https://t.me/cactusang',
  label: 'telegram'
}

describe('SocialLink', () => {
  it('renders', () => {
    const wrapper = shallow(<SocialLink {...item}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
