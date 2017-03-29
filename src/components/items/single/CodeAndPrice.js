import React from 'react'
import PurchaseButton from './PurchaseButton'
import Price from './Price'

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

CodeAndPrice.propTypes = {
  item: React.PropTypes.object.isRequired
}

export default CodeAndPrice
