import React from 'react';
import styled from 'styled-components'
import {color} from '../../theme'
import {Button} from '../../common/Button'
import Price from './Price'
import Icon from '../../common/Icon'

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

const MainInfo = ({item, addItemToCart}) => (
  <div>
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
);

MainInfo.propTypes = {
  item: React.PropTypes.object.isRequired,
  addItemToCart: React.PropTypes.func.isRequired
};

export default MainInfo;
