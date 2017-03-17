import React, {PropTypes} from 'react';

const SimpleCard = ({title, children}) => children
  ? (
    <div className="card my-1">
      <div className="card-header text-center">
        <h5>{title}</h5>
      </div>
      <div className="card-block">
        <p>{children}</p>
      </div>
    </div>
  )
  : null

SimpleCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default SimpleCard;
