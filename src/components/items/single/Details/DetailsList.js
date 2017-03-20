import React from 'react';
import SingleRowTable from '../../../common/SingleRowTable'
import LinkList from '../../../common/Links/LinkList'

const DetailsList = ({item}) => (
  <div>
    <SingleRowTable name="مدل">{item.modelsNames.join(' , ')}</SingleRowTable>
    <SingleRowTable name="رنگهای موجود">{item.colors.join(' , ')}</SingleRowTable>
    <SingleRowTable name="نام های دیگر">{item.names.join(' , ')}</SingleRowTable>
    <SingleRowTable name="لینک ها">
      {item.links.length && <LinkList links={item.links}/>}
    </SingleRowTable>
  </div>
);

DetailsList.propTypes = {
  item: React.PropTypes.object
};

export default DetailsList;
