import React, {PropTypes} from 'react';

const SingleRowTable = ({name, children}) => children
  ? (
    <table className="table table-bordered">
      <tbody>
        <tr>
          <th width="120">{name}</th>
          <td>
            {children}
          </td>
        </tr>
      </tbody>
    </table>
  )
  : null;

SingleRowTable.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node

};

export default SingleRowTable;
