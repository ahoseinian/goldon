import React from 'react'
import {shallow} from 'enzyme'
import LinkList from './LinkList'
import toJson from 'enzyme-to-json'

describe('LinkList', () => {
  it('renders links', () => {
    const links = [
      {_id:1, name:"", url:""},
      {_id:2, name:"", url:""},
      {_id:3, name:"", url:""},
    ]
    const wrapper = shallow(<LinkList links={links}/>)

    expect(
      toJson(wrapper)
    ).toMatchSnapshot()
  })
})
