import React from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components'
import {Helmet} from 'react-helmet'
import ItemImages from '../image/ImageGallery'
import findById from '../../../reducers/items/findById'
import similarItems from '../../../reducers/items/similarItems'
import Details from './Details'
import MainInfo from './MainInfo'
import List from '../list'
import SimpleCard from '../../common/card/SimpleCard'

const Wrapper = styled.div `
  margin-top: 4.5rem;
  margin-bottom: 1rem;
`

export class Single extends React.Component {
  static propTypes = {
    params: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired
    }),
    item: React.PropTypes.object
  }

  componentWillReceiveProps(nextProps) {
    window.scrollTo(0, 0)
  }

  render() {
    const {item, similarItems} = this.props
    return !item ? null :(
      <Wrapper className="container">
        <Helmet>
          <title>{item.name}</title>
        </Helmet>
        <div className="row">
          <div className="col-sm-4">
            <ItemImages images={item.images}/>
          </div>
          <div className="col-sm-8 mt-2">
            <MainInfo item={item}/>
          </div>
        </div>
        <div className="row ">
          <div className="col-12">
            <Details item={item}/>
            {
              similarItems &&
              <div className="similar-items">
                <SimpleCard title="اقلام مشابه">
                  <List items={similarItems}/>
                </SimpleCard>
              </div>
            }
          </div>
        </div>
      </Wrapper>
    )
  }
}



export default connect((state, {params}) => ({
  item: findById(state.items, params.id),
  similarItems: similarItems(state.items, params.id)
}))(Single);
