import React from 'react';
import styled from 'styled-components'
import {color} from '../../theme'
import CodeAndPrice from './CodeAndPrice'

const ItemName = styled.h1 `
  color:${color.grey};
  text-align: center;
  line-height: 3rem;
  padding: 1rem .5rem;
`
const MainInfo = ({item}) => (
  <div>
    <ItemName>{item.name}</ItemName>
    <CodeAndPrice item={item}/>
  </div>
);

MainInfo.propTypes = {
  item: React.PropTypes.object.isRequired
};

export default MainInfo;
