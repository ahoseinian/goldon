import React from 'react'
import styled from 'styled-components'

const Cm = styled.small `
  font-size: 0.6rem;
`

const Sizes = ({size}) => (
  <div className="d-flex justify-content-between pt-1 pl-3">
    <div>
      سایز:
    </div>
    <div>
      <span>{size.tool}</span>
      <small>*</small>
      <span>{size.arz}</span>
      <small>*</small>
      <span>{size.ertefa}</span>
      <Cm className="mr-1">سانتی متر</Cm>
    </div>
  </div>
)

export default Sizes
