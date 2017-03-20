import React from 'react';
import SimpleCard from '../../../common/card/SimpleCard'
import DetailsList from './DetailsList'
import SizeList from './SizeList'
import Card from '../../../common/card/Card'

const Details = ({item}) => (
  <div>
    <Card className="card-block">
      <SizeList {...item.size}/>
      <DetailsList item={item}/>
    </Card>
    <SimpleCard title="نگهداری">{item.maintenance}</SimpleCard>
    <SimpleCard title="توضیحات">{item.information}</SimpleCard>
    <SimpleCard title="خواص">{item.benefits}</SimpleCard>
  </div>
);

Details.propTypes = {
  item: React.PropTypes.object.isRequired
};

export default Details;
