import React from 'react';

const Details = ({item}) => (
  <div>{JSON.stringify(item)}</div>
);

Details.propTypes = {
  item: React.PropTypes.object.isRequired
};

export default Details;
