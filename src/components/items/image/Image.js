import React from 'react'
import styled from 'styled-components'

const Image = styled.img `
  width: 100%;
`
const ItemImage = ({id}) => <Image src={'/images/thumbs/' + id + '.jpg'}/>

ItemImage.propTypes = {
  id: React.PropTypes.string.isRequired
}

export default ItemImage;
