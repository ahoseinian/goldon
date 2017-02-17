import React from 'react'
import styled from 'styled-components'

const Small = styled.small `
  font-size: 0.6rem;
`

const Sizes = ({size}) => (
  <div className="d-flex justify-content-between pt-1 pl-3">
    <div>
      سایز:
    </div>
    <div>
      <span>{size.tool}</span>
      <Small> - </Small>
      <span>{size.arz}</span>
      <Small> - </Small>
      <span>{size.ertefa}</span>
      <Small className="mr-1">سانتی متر</Small>
    </div>
  </div>
)

export default Sizes
