import React from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux'
import {closeGallery} from '../../actions'

export const GalleryModal = ({isOpen = false, src, closeGallery}) => (
  <Modal contentLabel="Gallery" isOpen={isOpen} onRequestClose={closeGallery}>
    <img src={src} className="gallery-image"/>
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
