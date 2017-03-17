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
    <CodeAndPrice item={item}/>
  </div>
);

MainInfo.propTypes = {
  item: React.PropTypes.object.isRequired
};

const CodeAndPrice = ({item}) => item.price
  ? (
    <div>
      <span className="text-muted">
        <span>کد محصول:</span>
        <span>{item.code}</span>
      </span>
      <div className="row">
        <div className="col-sm-7 mt-1">
          <Price amount={item.price}/>
        </div>
        <div className="col-sm-5 mt-1">
          <PurchaseButton item={item}/>
        </div>
      </div>
    </div>
  )
  : null

export default MainInfo;
