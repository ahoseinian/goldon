import React from 'react';
import SingleLink from './SingleLink'

const LinkList = ({links}) => links.length
  ? (
    <div>
      {links.map(x => <SingleLink {...x} key={x._id}/>)}
    </div>
  )
  : null;

LinkList.propTypes = {
  links: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default LinkList;
