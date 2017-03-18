import React from 'react';
import Row from './Row'
import SingleRowTable from '../../../common/SingleRowTable'
import SimpleCard from '../../../common/card/SimpleCard'

const Details = ({item}) => (
  <div>

    <table className="table table-bordered mt-3">
      <tbody>
        <Row name="طول" value={item.size.tool} measure="سانتی متر"/>
        <Row name="عرض" value={item.size.arz} measure="سانتی متر"/>
        <Row name="ارتفاع" value={item.size.ertefa} measure="سانتی متر"/>
        <Row name="قطر" value={item.size.ghotr} measure="سانتی متر"/>
      </tbody>
    </table>

    <SingleRowTable name="مدل">{item.modelsNames.join(' , ')}</SingleRowTable>
    <SingleRowTable name="رنگهای موجود">{item.colors.join(' , ')}</SingleRowTable>
    <SimpleCard title="نگهداری">{item.maintenance}</SimpleCard>
    <SimpleCard title="توضیحات">{item.information}</SimpleCard>
    <SimpleCard title="خواص">{item.benefits}</SimpleCard>
  </div>
);

Details.propTypes = {
  item: React.PropTypes.object.isRequired
};

export default Details;
