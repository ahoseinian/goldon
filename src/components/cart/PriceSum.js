import React from 'react';
import SingleRowTable from '../common/SingleRowTable'
import Price from '../items/Price'

const PriceSum = ({sum}) => (
  <SingleRowTable name="مجموع">
    <Price value={sum}/>
  </SingleRowTable>
);

PriceSum.propTypes = {
  sum: React.PropTypes.number.isRequired
};

export default PriceSum;
