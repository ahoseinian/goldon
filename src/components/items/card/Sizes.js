import React from 'react'

const Sizes = ({size}) => (
  <div className="d-flex pt-2">
    <small className="ml-2">سایز:</small>
    <small>{size.tool}</small>
    <small>*</small>
    <small>{size.arz}</small>
    <small>*</small>
    <small>{size.ertefa}</small>
    <small className="mr-1">سانتی متر</small>
  </div>
)

export default Sizes
