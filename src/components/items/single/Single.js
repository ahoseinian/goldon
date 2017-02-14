import React from 'react';

const Signle = ({params}) => (
  <div></div>
);

Signle.propTypes = {
  params: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired
  })
};

export default Signle;
