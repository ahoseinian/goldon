import React from 'react'
import {shallow} from 'enzyme'
import Social from './Social'
import SocialLink from './SocialLink'

describe('Social', () => {
  it('renders', () => {
    const wrapper = shallow(<Social />)
  })

  it('renders a list of social links', () => {
    const links = [
      {url:'',label:'1'},
      {url:'',label:'2'},
    ]

    expect(
      shallow(<Social links={links}/>).find(SocialLink).length
    ).toEqual(2)

  })

})
