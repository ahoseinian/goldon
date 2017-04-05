import React from 'react'
import Modal from 'react-modal'

const GalleryModal = ({isOpen, src}) => (
  <Modal contentLabel="Gallery" isOpen={isOpen}>

  </Modal>
)

GalleryModal.propTypes = {
  src: React.PropTypes.string.isRequired,
  isOpen: React.PropTypes.bool.isRequired
}

export default GalleryModal
