import React from 'react';
import styled from 'styled-components'
import {color} from '../../theme'
import Price from './Price'
import PurchaseButton from './PurchaseButton'

const ItemName = styled.h1 `
  color:${color.grey};
  text-align: center;
  line-height: 3rem;
  padding: 1rem .5rem;
`

const MainInfo = ({item}) => (
  <div>
    <ItemName>{item.name}</ItemName>
    <div className="row">
      <div className="col-sm-7 mt-1">
        <Price amount={item.price}/>
      </div>
      <div className="col-sm-5 mt-1">
        <PurchaseButton item={item} />
      </div>
    </div>
  </div>
);

MainInfo.propTypes = {
  item: React.PropTypes.object.isRequired,
};

export default MainInfo;
