import React from 'react';
import SingleRowTable from '../../../common/SingleRowTable'
import LinkList from '../../../common/Links/LinkList'

const DetailsList = ({modelsNames, colors, names, links}) => (
  <div>
    <SingleRowTable name="مدل">{modelsNames.join(' , ')}</SingleRowTable>
    <SingleRowTable name="رنگهای موجود">{colors.join(' , ')}</SingleRowTable>
    <SingleRowTable name="نام های دیگر">{names.join(' , ')}</SingleRowTable>
    { links.length !== 0 &&
      <SingleRowTable name="لینک ها">
         <LinkList links={links}/>
      </SingleRowTable>
    }
  </div>
);

DetailsList.propTypes = {
  modelsNames: React.PropTypes.array.isRequired,
  colors: React.PropTypes.array.isRequired,
  names: React.PropTypes.array.isRequired,
  links: React.PropTypes.array
};

export default DetailsList;
