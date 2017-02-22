import React from 'react'
import styled from 'styled-components'
import CartBar from './cart/CartBar'
import Card from './common/Card'

export const Container = styled.div `
  position:fixed;
  top:0;
  background: white;
  z-index: 3;
  width: 100%;
`
const TopBar = ({location}) => {
  return (
    <Container>
      <Card>
        <div className="container">
          <CartBar location={location}/>
        </div>
      </Card>
    </Container>
  )
}

export default TopBar
