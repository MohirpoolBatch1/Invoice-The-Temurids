import React from 'react'
import {useNavigate} from 'react-router-dom'
import Modal from 'react-modal'
import Button from '../../components/Button/Button.jsx'
import {useDeleteInvoiceMutation} from '../../services/invoiceDeleteApi'

export default function ModalDeleteInvoice({isOpenModal, id, toggleModal}) {
  const navigate = useNavigate()
  const [deleteInvoice] = useDeleteInvoiceMutation()
  function handleDelete() {
    deleteInvoice(id)
    navigate('../')
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '28rem',
      padding: '2rem',
      borderRadius: '0.5rem',
      boxShadow: '0px 10px 10px -10px rgba(72, 84, 159, 0.1)',
      boxSizing: 'border-box',
    },
    overlay: {
      backgroundColor: 'rgba(20, 22, 37, 0.45)',
    },
  }
  return (
    <Modal
      style={customStyles}
      isOpen={isOpenModal}
      onRequestClose={toggleModal}
      contentLabel="My dialog"
    >
      <div>
        <p className="font-weight text-[1.5rem] mt-1">Confirm Deletion</p>
        <p className="text-gray-300 text-xs mt-1.5">
          Are you sure you want to deletion invoice {id} ? This action <br />
          cannot be undone
        </p>
        <div className="flex mb-2 mt-2 justify-end">
          <Button buttonKind={'cancel'} onClick={toggleModal}></Button>
          <Button
            buttonKind={'delete'}
            onClick={() => handleDelete(id)}
            className="ml-2"
          >
            delete
          </Button>
        </div>
      </div>
    </Modal>
  )
}
