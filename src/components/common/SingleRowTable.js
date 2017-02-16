import React, {PropTypes} from 'react';

const SingleRowTable = ({name, children}) => (
  <table className="table table-bordered">
    <tbody>
      <tr>
        <th>{name}</th>
        <td>
          {children}
        </td>
      </tr>
    </tbody>
  </table>
);

SingleRowTable.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node

};

export default SingleRowTable;
