import React from 'react'
import {Small} from '../common/typography/Small'

const Price = ({value}) => (
  <div>
    {value.toLocaleString()}
    <Small>تومان</Small>
  </div>
)

export default Price
