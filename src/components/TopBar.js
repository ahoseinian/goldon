import React from 'react'
import styled from 'styled-components'
import {color} from './theme'
import CartBar from './cart/CartBar'

export const Container = styled.div `
  position:fixed;
  top:0;
  background: ${color.normal};
  color: ${color.white};
  z-index: 3;
  width: 100%;
`
const TopBar = ({location}) => {
  return (
    <Container>
      <div className="container">
        <CartBar location={location}/>
      </div>
    </Container>
  )
}

export default TopBar
