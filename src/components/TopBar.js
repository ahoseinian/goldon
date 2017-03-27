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

TopBar.propTypes = {
  location: React.PropTypes.shape({
    pathname: React.PropTypes.string.isRequired
  }).isRequired
}

export default TopBar
