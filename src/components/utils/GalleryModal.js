import React from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux'
import {closeGallery} from '../../actions'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    maxWidth              : '95%',
    maxHeight             : '85%'
  }
}

export const GalleryModal = ({isOpen = false, src, closeGallery}) => (
  <Modal
    contentLabel="Gallery"
    isOpen={isOpen}
    onRequestClose={closeGallery}
    style={customStyles}
  >
    <img src={src} className="gallery-image" alt=""/>
  </Modal>
)

GalleryModal.propTypes = {
  src: React.PropTypes.string.isRequired,
  isOpen: React.PropTypes.bool,
  closeGallery: React.PropTypes.func.isRequired
}

export const mapStateToProps = ({gallery}) => ({
  src: `/images/original/${gallery.id}.jpg`,
  isOpen: gallery.isOpen
})

export default connect(mapStateToProps, {closeGallery})(GalleryModal)
