import React, {PropTypes} from 'react';
import SmallImage from './SmallImage'

const ImageList = ({images, imageClicked}) => {
  const list = images.map(x => <div className="d-inline image-thumbnail" onClick={() => imageClicked(x)} key={x}><SmallImage id={x}/></div>)
  return images.length > 1
    ? <div>{list}</div>
    : null
}

ImageList.propTypes = {
  images: PropTypes.array.isRequired,
  imageClicked: PropTypes.func
};

export default ImageList;
