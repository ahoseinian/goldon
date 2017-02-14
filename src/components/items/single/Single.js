import React from 'react';
import {connect} from 'react-redux'
import {addItemToCart} from '../../../actions/index'
import styled from 'styled-components'
import {Button} from '../../common/Button'
import Icon from '../../common/Icon'
import ItemImage from '../Image'
import findById from '../../../reducers/items/findById'
import Price from './Price'
import {color} from '../../theme'

const Wrapper = styled.div `
  margin-top: 1rem;
  margin-bottom: 1rem;
`
const ItemName = styled.h1 `
  color:${color.grey};
  text-align: center;
  line-height: 3rem;
  padding: 1rem .5rem;
`
const AddButton = styled(Button)`
  padding: 1rem 2rem;
  width: 100%;
  height: 100%;
`

const Signle = ({item, addItemToCart}) => item
  ? (
    <Wrapper className="container">
      <div className="row">
        <div className="col-sm-4">
          <ItemImage id={item.images[0]}/>
        </div>
        <div className="col-sm-8 mt-2">
          <ItemName>{item.name}</ItemName>
          <div className="row">
            <div className="col-sm-7 mt-1">
              <Price amount={item.price}/>
            </div>
            <div className="col-sm-5 mt-1">
              <AddButton className="btn-block" onClick={addItemToCart.bind(null, item)}>
                <Icon name="plus"/>
                <span className="mr-2">
                  اضافه کردن به سبد خرید
                </span>
              </AddButton>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
  : null

Signle.propTypes = {
  params: React
    .PropTypes
    .shape({id: React.PropTypes.string.isRequired})
};

export default connect((state, {params}) => ({
  item: findById(state.items, params.id)
}), {addItemToCart})(Signle);
