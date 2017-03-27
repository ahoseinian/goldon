import React from 'react'
import styled from 'styled-components'
import CartBar from './cart/CartBar'
import Card from './common/card/Card'

export const Container = styled.div `
  position:fixed;
  top:0;
  background: white;
  z-index: 3;
  width: 100%;
`
const TopBar = ({pathname}) => {
  return (
    <Container>
      <Card>
        <div className="container">
          <CartBar pathname={pathname}/>
        </div>
      </Card>
    </Container>
  )
}

TopBar.propTypes = {
  pathname: React.PropTypes.string.isRequired
}

export default TopBar
