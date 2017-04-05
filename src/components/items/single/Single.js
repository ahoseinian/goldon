import React from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components'
import {Helmet} from 'react-helmet'
import ImageGallery from '../image/ImageGallery'
import GalleryModal from '../../utils/GalleryModal'
import findById from '../../../reducers/items/findById'
import similarItems from '../../../reducers/items/similarItems'
import {showInGallery} from '../../../actions'
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
    item: React.PropTypes.object,
    handleZoom: React.PropTypes.func
  }

  componentWillMount(){
    window.scrollTo(0, 0)
  }

  componentWillReceiveProps(nextProps) {
    window.scrollTo(0, 0)
  }

  render() {
    const {item, similarItems, showInGallery} = this.props
    return !item ? null :(
      <Wrapper className="container">
        <GalleryModal />
        <Helmet>
          <title>{item.name}</title>
        </Helmet>
        <div className="row">
          <div className="col-sm-4">
            <ImageGallery images={item.images} handleZoom={showInGallery}/>
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

export const mapStateToProps = (state, {params}) => ({
  item: findById(state.items, params.id),
  similarItems: similarItems(state.items, params.id)
})

export const mapDispatchToProps = { showInGallery }

export default connect(mapStateToProps, mapDispatchToProps)(Single);
