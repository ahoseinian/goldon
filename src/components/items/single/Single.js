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

const Wrapper = styled.div`
  padding-bottom: 1rem;
`
const ItemName = styled.h1 `
  color:${color.grey};
  text-align: center;
  line-height: 3rem;
  padding: 1rem .5rem;
`
const AddButton = styled(Button)`
  padding: 1rem;
  width: 100%;
`

const Signle = ({item, addItemToCart}) => item
  ? (
    <Wrapper>
      <div className="container">
        <ItemImage id={item.images[0]}/>
        <ItemName>{item.name}</ItemName>
      </div>
      <Price amount={item.price}/>
      <div className="container">
        <AddButton className="btn-block" onClick={addItemToCart.bind(null, item)}>
          <Icon name="plus"/>
          <span className="mr-2">
            اضافه کردن به سبد خرید
          </span>
        </AddButton>
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
