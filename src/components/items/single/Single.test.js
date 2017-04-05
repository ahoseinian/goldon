import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import ImageGallery from '../image/ImageGallery'
import {Helmet} from 'react-helmet'
import {Single, mapStateToProps, mapDispatchToProps} from './Single'
import store from '../../../store'

const item = {
  name: 'item name',
  images: []
}

describe('Single', () => {
  it('does not renders similarItems without them', () => {
    const wrapper = shallow(<Single item={item}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders similarItems', () => {
    const wrapper = shallow(<Single item={item} similarItems={[{}]}/>)
    expect(toJson(wrapper.find('.similar-items'))).toMatchSnapshot();
  })

  it('scrolls to zero position', () => {
    global.scrollTo = jest.fn()
    const wrapper = shallow(<Single item={item} similarItems={[{}]}/>)
    expect(global.scrollTo.mock.calls[0]).toEqual([0, 0])
    wrapper.setProps({
      item: {
        ...item,
        name: 'akbar'
      }
    })
    expect(global.scrollTo.mock.calls[1]).toEqual([0, 0])
  })

  it('changes document title', () => {
    const wrapper = shallow(<Single item={item} similarItems={[{}]}/>)
    expect(wrapper.find(Helmet).find('title').text()).toEqual('item name')
  })

  it('paths handleZoom prop to ImageGallery', () => {
    const handleZoomFunc = jest.fn()
    const wrapper = shallow(<Single item={item} similarItems={[{}]} handleZoom={handleZoomFunc}/>)
    expect(wrapper.find(ImageGallery).props().handleZoom).toEqual(handleZoomFunc)
  })
})

describe('mapStateToProps', () => {
  it('returns item by id', () => {
    const state = {
      items: [
        { id: 'test' },
        { id: 'test3' }
      ]
    }
    expect(
      mapStateToProps(state, {
        params: { id: 'test3' }
      }).item
    ).toEqual({id: 'test3'})
  })
})


describe('mapDispatchToProps', () => {
  it('returns showInGallery function', () => {
    expect(typeof mapDispatchToProps.showInGallery).toEqual('function')
  })
});
