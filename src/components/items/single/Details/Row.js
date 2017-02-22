import React from 'react';

const SingleRow = ({name, value, measure}) => value
  ? (
    <tr>
      <th>{name}</th>
      <td>{value} {measure}</td>
    </tr>
  )
  : null;

SingleRow.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React
    .PropTypes
    .oneOfType([React.PropTypes.number, React.PropTypes.string]),
  measure: React.PropTypes.string
};

export default SingleRow;
