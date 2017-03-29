import React from 'react'
import styled from 'styled-components'

const Small = styled.small `
  font-size: 0.6rem;
`

const Sizes = ({tool, arz, ertefa}) => (
  <div className="d-flex justify-content-between pt-1 pl-3">
    <div>
      سایز:
    </div>
    <div>
      <span>{tool}</span>
      <Small> - </Small>
      <span>{arz}</span>
      <Small> - </Small>
      <span>{ertefa}</span>
      <Small className="mr-1">سانتی متر</Small>
    </div>
  </div>
)

Sizes.propTypes = {
  tool: React.PropTypes.string,
  arz: React.PropTypes.string,
  ertefa: React.PropTypes.string,
}

export default Sizes
