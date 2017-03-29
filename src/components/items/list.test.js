import React from 'react'
import {shallow} from 'enzyme'
import List from './list'
import Card from './card/CardSm'

const items = [
  {id:'#1', name: 'item1'},
  {id:'#2', name: 'item2'},
  {id:'#3', name: 'item3'},
]

describe('list', () => {
  it('renders cards of items', () => {
    const wrapper = shallow(<List items={items}/>)
    expect(wrapper.find(Card).length).toEqual(3)
  })
})
