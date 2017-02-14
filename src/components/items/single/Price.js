import React from 'react';
import styled from 'styled-components'
import {color} from '../../theme'

const Container = styled.div`
  background: ${color.light};
  padding: 1.5rem;
`

const Currency = styled.small`
  position: relative;
  top: 0.4rem;
  margin-right: 1rem;
`

const Price = ({amount}) => (
  <Container className="d-flex justify-content-center h4">
    <div>{amount.toLocaleString()}</div>
    <Currency>تومان</Currency>
  </Container>
);

Price.propTypes = {
  amount: React.PropTypes.number.isRequired
};

export default Price;
