import React from 'react';
import Row from './Row'

const Details = ({item}) => (
  <table className="table table-bordered mt-3">
    <tbody>
      <Row name="طول" value={item.size.tool}  measure="سانتی متر"/>
      <Row name="عرض" value={item.size.arz}  measure="سانتی متر"/>
      <Row name="ارتفاع" value={item.size.ertefa}  measure="سانتی متر"/>
    </tbody>
  </table>
);

Details.propTypes = {
  item: React.PropTypes.object.isRequired
};

export default Details;
