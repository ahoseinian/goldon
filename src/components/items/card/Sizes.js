import React from 'react'

const Sizes = ({size}) => (
  <div className="d-flex justify-content-between pt-1 pl-3">
    <div>
      <small className="ml-2">سایز:</small>
    </div>
    <div>
      <small>{size.tool}</small>
      <small>*</small>
      <small>{size.arz}</small>
      <small>*</small>
      <small>{size.ertefa}</small>
      <small className="mr-1">سانتی متر</small>
    </div>
  </div>
)

export default Sizes
