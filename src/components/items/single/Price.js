import React from 'react';
import styled from 'styled-components'
import {color} from '../../theme'

const Container = styled.div`
  padding: 1.5rem;
  color: ${color.black};
`

const Currency = styled.small`
  position: relative;
  top: 0.4rem;
  margin-right: 1rem;
`

const Price = ({amount}) => (
  <Container className="d-flex justify-content-center h4 m-0 h-100">
    <div className="price">{amount.toLocaleString()}</div>
    <Currency>تومان</Currency>
  </Container>
);

Price.propTypes = {
  amount: React.PropTypes.number.isRequired
};

export default Price;
