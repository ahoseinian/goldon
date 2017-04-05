import React, {Component, PropTypes} from 'react'
import Image from './Image'
import ImageList from './ImageList'

class ImageGallery extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    handleZoom: PropTypes.func
  }

  state = {
    current: this.props.images[0]
  }

  imageClicked(current){
    this.setState({current});
  }

  componentWillReceiveProps(nextProps){
    this.setState({current: nextProps.images[0]})
  }

  render() {
    const {images, handleZoom} = this.props;
    return (
      <div>
        <Image id={this.state.current} handleZoom={handleZoom}/>
        <ImageList images={images} imageClicked={this.imageClicked.bind(this)}/>
      </div>
    )
  }

}

export default ImageGallery
