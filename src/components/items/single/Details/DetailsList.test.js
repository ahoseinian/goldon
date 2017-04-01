import React from 'react'
import {shallow} from 'enzyme'
import DetailsList from './DetailsList'
import toJson from 'enzyme-to-json'
import LinkList from '../../../common/Links/LinkList'

const item = {
  modelsNames: [],
  colors: [],
  names: [],
  links: []
}

describe('DetailsList', () => {
  it('renders', () => {
    const wrapper = shallow(<DetailsList {...item}/>)
    expect(toJson(
      wrapper
    )).toMatchSnapshot()
  })

  it('does not render LinkList without links', () => {
    const wrapper = shallow(<DetailsList {...item}/>)
    expect(wrapper.find(LinkList).length).toEqual(0)
  })

  it('renders LinkList when there are links', () => {
    const itemWithLinks = {...item, links: [{}]}
    const wrapper = shallow(<DetailsList {...itemWithLinks}/>)
    expect(wrapper.find(LinkList).length).toEqual(1)
  })
})
