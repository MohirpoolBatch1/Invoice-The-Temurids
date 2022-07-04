import React from 'react'
import Modal from 'react-modal'
import Button from '../../components/Button/Button.jsx'

export default function ModalDeleteInvoice({isOpen, id, toggleModal}) {
  return (
    <Modal
      className="bg-[#FFFFFF] w-2/6 mt-[17%] ml-[36%] mr-[-50%] rounded-[8px] p-4"
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel="My dialog"
    >
      <div>
        <p className="font-weight text-[1.5rem] mt-2">Confirm Deletion</p>
        <p className="text-gray-300 text-xs">
          Are you sure you want to deletion invoice {id} ? This action cannot be
          undone
        </p>
        <div className="flex mb-3 mt-7 mr-5 justify-end">
          <Button buttonKind={'cancel'} onClick={toggleModal}></Button>
          <Button buttonKind={'delete'} className="ml-2">
            delete
          </Button>
        </div>
      </div>
    </Modal>
  )
}
