import React from 'react'
import styled from 'styled-components'

const Image = styled.img `
  width: 100%;
`
const ItemImage = ({id, handleZoom = function(){} }) => (
  <Image
    src={'/images/thumbs/' + id + '.jpg'}
    onClick={() => handleZoom(id)}
  />
)

ItemImage.propTypes = {
  id: React.PropTypes.string.isRequired,
  handleZoom: React.PropTypes.func
}

export default ItemImage;
