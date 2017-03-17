import React from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components'
import ItemImage from '../image/ImageGallery'
import findById from '../../../reducers/items/findById'
import similarItems from '../../../reducers/items/similarItems'
import Details from './Details'
import MainInfo from './MainInfo'
import List from '../list'

const Wrapper = styled.div `
  margin-top: 1rem;
  margin-bottom: 1rem;
`

class Single extends React.Component {
  static propTypes = {
    params: React.PropTypes.shape({id: React.PropTypes.string.isRequired})
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params !== nextProps.params) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    const {item, similarItems} = this.props
    return item
      ? (
        <Wrapper className="container">
          <div className="row">
            <div className="col-sm-4">
              <ItemImage images={item.images}/>
            </div>
            <div className="col-sm-8 mt-2">
              <MainInfo item={item}/>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Details item={item}/>
            </div>
            {similarItems.length && <div className="col-12 mt-3">
              <h3 className="text-muted text-center">محصولات مشابه</h3>
              <List items={similarItems}/>
            </div>}
          </div>
        </Wrapper>
      )
      : null
  }
}

export default connect((state, {params}) => ({
  item: findById(state.items, params.id),
  similarItems: similarItems(state.items, params.id)
}))(Single);
