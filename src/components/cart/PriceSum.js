import React from 'react';
import Price from '../items/Price'

const PriceSum = ({sum}) => (
  <table className="table table-borderd">
    <tbody>
      <tr>
        <th>مجموع</th>
        <td>
          <Price value={sum}/>
        </td>
      </tr>
    </tbody>
  </table>
);

PriceSum.propTypes = {
  sum: React.PropTypes.number.isRequired
};

export default PriceSum;
