import React from 'react';
import {connect} from 'react-redux'
import ItemImage from '../Image'
import findById from '../../../reducers/items/findById'

const Signle = ({item}) => (
  <div className="container">
    {JSON.stringify(item)}
    {console.log(item)}
  </div>
);

Signle.propTypes = {
  params: React
    .PropTypes
    .shape({id: React.PropTypes.string.isRequired})
};

export default connect((state, {params}) => ({item: findById(state.items, params.id)}))(Signle);
