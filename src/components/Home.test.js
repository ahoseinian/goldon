import React from 'react'
import {shallow, mount} from 'enzyme'
import Home from './Home'
import store from '../store'
import {GET_ALL_ITEMS_FULFILLED} from '../actions/action-types'
import toJson from 'enzyme-to-json'

describe('Home', () => {
  it('renders', () => {
    const wrapper = shallow(<Home store={store}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders items', () => {
    store.dispatch({
      type: GET_ALL_ITEMS_FULFILLED,
      payload: {body:[
        {id:1},
        {id:2},
      ]}
    })

    const wrapper = shallow(<Home store={store}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})
