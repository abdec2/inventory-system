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

// ** Styles
const ViewProductModal = ({ open, handleModal, selectedRow }) => {
  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModal} />
  return (
    <Modal
      isOpen={open}
      toggle={handleModal}
      className='modal-lg modal-dialog-centered'
      modalClassName=''
      contentClassName='pt-0'
    >
      <ModalHeader className='mb-3' toggle={handleModal} close={CloseBtn} tag='div'>
        <h5 className='modal-title'>{selectedRow.name}</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
        <div className="d-flex flex-column flex-sm-row align-items-center justify-content-around">
            <img  style={{objectFit:"contain"}} src={selectedRow.product_image && process.env.REACT_APP_API_URL + selectedRow.product_image.url} height={200} width={200} alt="" />
            <div className="d-flex flex-column mt-5 mr-sm-5">
                <p><span style={{fontWeight: 800}} className="mr-1">Product Name:</span> {selectedRow.label}</p>
                <p><span style={{fontWeight: 800}} className="mr-1">SKU:</span> {selectedRow.sku}</p>
                <p><span style={{fontWeight: 800}} className="mr-1">Type:</span> {(selectedRow.product_type && selectedRow.product_type.type)}</p>
                <p><span style={{fontWeight: 800}} className="mr-1">Variation of:</span> {(selectedRow.parent_product) ? selectedRow.parent_product.sku : 'N/A'}</p>
                <p><span style={{fontWeight: 800}} className="mr-1">Brand:</span> {selectedRow.brand || 'N/A'} </p>
                <p><span style={{fontWeight: 800}} className="mr-1">Category:</span> {(selectedRow.categories && selectedRow.categories.length > 0) ? selectedRow.categories[0].category : 'N/A'}</p>
                <p><span style={{fontWeight: 800}} className="mr-1">Unit:</span> {selectedRow.unit && selectedRow.unit.unit}</p>
                <p><span style={{fontWeight: 800}} className="mr-1">Price:</span> {selectedRow.price || 0}</p>
                <p><span style={{fontWeight: 800}} className="mr-1">Available Quantity:</span> {selectedRow.qty || 0}</p>
            </div>
        </div>

        <div className="mx-1 my-2">
            <div className="border-bottom"><h3>Warehouse Information</h3></div>
            <div className="mt-3">
                <p><span style={{fontWeight: 800}} className="mr-1">Warehouse:</span> Warehouse 1</p>
                {/* <p><span style={{fontWeight: 800}} className="mr-1">Locations</span></p> */}
                <ul className="pl-0" style={{ listStyle:'none' }}>
                    <li className="mb-2">
                        <div style={{ gap:12 }} className="d-flex flex-column flex-sm-row">
                            <div><span style={{fontWeight: 800}} className="mr-1">Bin Location:</span> A01-01A00 </div>
                            <div><span style={{fontWeight: 800}} className="mr-1">Quantity:</span> 5 </div>
                        </div>
                    </li>
                    <li className="mb-2">
                        <div style={{ gap:12 }} className="d-flex flex-column flex-sm-row">
                            <div><span style={{fontWeight: 800}} className="mr-1">Bin Location:</span> A01-01A01 </div>
                            <div><span style={{fontWeight: 800}} className="mr-1">Quantity:</span> 5 </div>
                        </div>
                    </li>
                    <li className="mb-2">
                        <div style={{ gap:12 }} className="d-flex flex-column flex-sm-row">
                            <div><span style={{fontWeight: 800}} className="mr-1">Bin Location:</span> A01-01A02 </div>
                            <div><span style={{fontWeight: 800}} className="mr-1">Quantity:</span> 5 </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="mt-3">
            <p><span style={{fontWeight: 800}} className="mr-1">Warehouse:</span> Warehouse 2</p>
                {/* <p><span style={{fontWeight: 800}} className="mr-1">Locations</span></p> */}
                <ul className="pl-0" style={{ listStyle:'none' }}>
                    <li className="mb-2">
                        <div style={{ gap:12 }} className="d-flex flex-column flex-sm-row">
                            <div><span style={{fontWeight: 800}} className="mr-1">Bin Location:</span> B01-01A00 </div>
                            <div><span style={{fontWeight: 800}} className="mr-1">Quantity:</span> 5 </div>
                        </div>
                    </li>
                    <li className="mb-2">
                        <div style={{ gap:12 }} className="d-flex flex-column flex-sm-row">
                            <div><span style={{fontWeight: 800}} className="mr-1">Bin Location:</span> B01-01A01 </div>
                            <div><span style={{fontWeight: 800}} className="mr-1">Quantity:</span> 5 </div>
                        </div>
                    </li>
                    <li className="mb-2">
                        <div style={{ gap:12 }} className="d-flex flex-column flex-sm-row">
                            <div><span style={{fontWeight: 800}} className="mr-1">Bin Location:</span> B01-01A02 </div>
                            <div><span style={{fontWeight: 800}} className="mr-1">Quantity:</span> 5 </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default ViewProductModal
