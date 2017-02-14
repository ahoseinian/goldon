import React from 'react'
import Disc from './Disc'

const Sizes = ({size}) => (
  <div className="d-flex pt-2">
    <small className="ml-2">سایز:</small>
    <small>{size.tool}</small>
    <small>*</small>
    <small>{size.arz}</small>
    <small>*</small>
    <small>{size.ertefa}</small>
    <small>سانتی متر</small>
  </div>
)

export default Sizes
