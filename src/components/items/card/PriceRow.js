import React from 'react'
import Disc from './Disc'

const PriceRow = ({price}) => price ? (
  <div className="pt-2 pl-3">
    <Disc name="قیمت" value={price.toLocaleString()} measure="تومان"/>
  </div>
): null

PriceRow.propTypes = {
  price: React.PropTypes.number
}

export default PriceRow
