import React, {Component, PropTypes} from 'react'
import Image from './Image'
import ImageList from './ImageList'

class ImageGallery extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired
  }

  state = {
    current: this.props.images[0]
  }

  imageClicked(current){
    this.setState({current});
  }

  render() {
    const {images} = this.props;
    return (
      <div>
        <Image id={this.state.current}/>
        <ImageList images={images} imageClicked={this.imageClicked.bind(this)}/>
      </div>
    )
  }

}

export default ImageGallery
