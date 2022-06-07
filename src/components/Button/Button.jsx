/* eslint-disable no-console */
import React from 'react'
import * as types from './constant'
import plus from '../../assets/icon-plus.svg'

function Button({buttonKind, onClick, className, type, children}) {
  let btnClasses
  let defaultChildren

  if (buttonKind === types.del) {
    btnClasses = `bg-red   text-gray-100  capitalize w-[5.5rem] h-[3rem] rounded-[1.5rem] hover:bg-red-light `
    defaultChildren = types.del
  }
  if (buttonKind === types.editLight) {
    btnClasses = `capitalize   text-gray-400 w-[4.5rem] h-[3rem] rounded-[1.5rem] hover:bg-gray-200 `
    defaultChildren = 'edit'
  }
  if (buttonKind === types.editDark) {
    btnClasses = `capitalize   text-gray-200 bg-gray-500 w-[4.5rem] h-[3rem] rounded-[1.5rem] hover:bg-gray-100 `
    defaultChildren = 'edit'
  }
  if (buttonKind === types.newInvoice) {
    btnClasses = `capitalize     text-white bg-purple w-[9.375rem] h-[3rem] rounded-[1.5rem] hover:bg-purple-light `
    defaultChildren = types.newInvoice
  }
  if (buttonKind === types.markAsPaid) {
    btnClasses = `   text-white bg-purple w-[8.18rem] h-[3rem] rounded-[1.5rem] hover:bg-purple-light `
    defaultChildren = 'Mark as Paid'
  }
  if (buttonKind === types.saveAsDraftLight) {
    btnClasses = `   text-gray-300 bg-gray-500 w-[8.31rem] h-[3rem] rounded-[1.5rem] hover:bg-gray-600 `
    defaultChildren = 'Save as Draft'
  }
  if (buttonKind === types.saveAsDraftDark) {
    btnClasses = `   text-gray-200 bg-gray-500 w-[8.31rem] h-[3rem] rounded-[1.5rem] hover:bg-gray-800 `
    defaultChildren = 'Save as Draft'
  }
  if (buttonKind === types.addNewItem) {
    btnClasses = `   text-gray-400 w-[21.875rem] h-[3rem] rounded-[1.5rem] hover:bg-gray-200 `
    defaultChildren = 'Add New Item'
  }
  if (buttonKind === types.cancel) {
    btnClasses = `capitalize text-gray-400  w-[5.6rem] h-[3rem] rounded-[1.5rem] hover:bg-gray-200 `
    defaultChildren = types.cancel
  }
  if (buttonKind === types.discard) {
    btnClasses = `capitalize text-gray-400 w-[5.6rem] h-[3rem] rounded-[1.5rem] hover:bg-gray-200 `
    defaultChildren = types.discard
  }
  if (buttonKind === types.saveChanges) {
    btnClasses = `capitalize text-white bg-purple w-[8.6rem] h-[3rem] rounded-[1.5rem] hover:bg-purple-light `
    defaultChildren = 'save changes'
  }
  if (buttonKind === types.saveSend) {
    btnClasses = `bg-purple capitalize text-white w-[8.18rem] h-[3rem] rounded-[1.5rem] hover:bg-purple-light `
    defaultChildren = 'save send'
  }
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex justify-around items-center font-bold text-xs ${btnClasses} ${className}`}
    >
      {defaultChildren === 'newInvoice' ? (
        <>
          <span className="flex justify-center items-center w-[2rem] h-[2rem] rounded-full bg-white text-white">
            <img src={plus} alt="plus" />
          </span>
          <span className={`mr-3 `}>{children || 'New Invoice'}</span>
        </>
      ) : (
        defaultChildren
      )}
    </button>
  )
}
export default Button
