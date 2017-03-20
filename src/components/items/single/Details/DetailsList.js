import React from 'react';
import Card from '../../../common/card/Card'
import SingleRowTable from '../../../common/SingleRowTable'
import LinkList from '../../../common/Links/LinkList'

const DetailsList = ({item}) => (
  <Card className="card-block">
    <SingleRowTable name="مدل">{item.modelsNames.join(' , ')}</SingleRowTable>
    <SingleRowTable name="رنگهای موجود">{item.colors.join(' , ')}</SingleRowTable>
    <SingleRowTable name="نام های دیگر">{item.names.join(' , ')}</SingleRowTable>
    <SingleRowTable name="لینک ها">
      {item.links.length && <LinkList links={item.links}/>}
    </SingleRowTable>
  </Card>
);

DetailsList.propTypes = {
  item: React.PropTypes.object
};

export default DetailsList;
