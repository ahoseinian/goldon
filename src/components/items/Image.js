import React from 'react'
import styled from 'styled-components'

const Image = styled.img `
  width: 100%;
`

const ItemImage = ({id}) => <Image src={'/images/thumbs/' + id + '.jpg'}/>

export default ItemImage;
export const SmallImage = ({id}) => <img src={'/images/50/' + id + '.jpg'} width="50" role="presentation"/>
