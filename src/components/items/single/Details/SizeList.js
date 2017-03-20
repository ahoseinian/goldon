import React from 'react';
import Row from './Row'

const SizeList = ({tool, arz, ertefa, ghotr}) => (
  <table className="table table-bordered mt-4">
    <tbody>
      <Row name="طول" value={tool} measure="سانتی متر"/>
      <Row name="عرض" value={arz} measure="سانتی متر"/>
      <Row name="ارتفاع" value={ertefa} measure="سانتی متر"/>
      <Row name="قطر" value={ghotr} measure="سانتی متر"/>
    </tbody>
  </table>
);

SizeList.propTypes = {
  tool: React.PropTypes.number,
  arz: React.PropTypes.number,
  ertefa: React.PropTypes.number,
  ghotr: React.PropTypes.number
};

export default SizeList;
