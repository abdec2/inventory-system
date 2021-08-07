// ** React Imports
import { useState } from 'react'
// ** Third Party Components
import { X } from 'react-feather'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap'

import FileUploader from './component/FileUploader'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const ImportProductModal = ({ open, handleModal }) => {

  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModal} />
   
  return (
    <Modal
      isOpen={open}
      toggle={handleModal}
      className='sidebar-sm'
      modalClassName='modal-slide-in'
      contentClassName='pt-0'
    >
      <ModalHeader className='mb-3' toggle={handleModal} close={CloseBtn} tag='div'>
        <h5 className='modal-title'>Import Products</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
        <FileUploader handleModal={handleModal} />
      </ModalBody>
    </Modal>
  )
}

export default ImportProductModal
