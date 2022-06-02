import React from 'react'
import plus from '../assets/icon-plus.svg'

function Button({buttonKind, className, children}) {
  if (buttonKind === 'delete') {
    return (
      <button
        type="button"
        className={`bg-red font-bold text-gray-100 text-xs capitalize  
          w-[5.5rem] h-[3rem] rounded-[1.5rem] hover:bg-red-light ${className}`}
      >
        {children || 'delete'}
      </button>
    )
  }
  if (buttonKind === 'editLight') {
    return (
      <button
        type="button"
        className={`capitalize text-xs
 font-bold text-gray-400 w-[4.5rem] h-[3rem] rounded-[1.5rem] hover:bg-gray-200 ${className}`}
      >
        {children || 'edit'}
      </button>
    )
  }
  if (buttonKind === 'editDark') {
    return (
      <button
        type="button"
        className={`capitalize text-xs
 font-bold text-gray-200 bg-gray-500 w-[4.5rem] h-[3rem] rounded-[1.5rem] hover:bg-gray-100 ${className}`}
      >
        {children || 'edit'}
      </button>
    )
  }
  if (buttonKind === 'newInvoice') {
    return (
      <button
        type="button"
        className={`capitalize  text-xs flex justify-around items-center
 font-bold text-white bg-purple w-[9.375rem] h-[3rem] rounded-[1.5rem] hover:bg-purple-light ${className}`}
      >
        <span className="flex justify-center items-center w-[2rem] h-[2rem] rounded-full bg-white text-purple">
          <img src={plus} alt="plus" />
        </span>
        <span className={`mr-3 ${className}`}>{children || 'new invoice'}</span>
      </button>
    )
  }
  if (buttonKind === 'markAsPaid') {
    return (
      <button
        type="button"
        className={`flex justify-around items-center text-xs
 font-bold text-white bg-purple w-[8.18rem] h-[3rem] rounded-[1.5rem] hover:bg-purple-light ${className}`}
      >
        {children || 'Mark as Paid'}
      </button>
    )
  }
  if (buttonKind === 'saveAsDraftLight') {
    return (
      <button
        type="button"
        className={`flex justify-around items-center text-xs
 font-bold text-gray-300 bg-gray-500 w-[8.31rem] h-[3rem] rounded-[1.5rem] hover:bg-gray-600 ${className}`}
      >
        {children || 'Save as Draft'}
      </button>
    )
  }
  if (buttonKind === 'saveAsDraftDark') {
    return (
      <button
        type="button"
        className={`flex justify-around items-center text-xs
 font-bold text-gray-200 bg-gray-500 w-[8.31rem] h-[3rem] rounded-[1.5rem] hover:bg-gray-800 ${className}`}
      >
        {children || 'Save as Draft'}
      </button>
    )
  }
  if (buttonKind === 'addNewItem') {
    return (
      <button
        type="button"
        className={`flex justify-around items-center text-xs
 font-bold text-gray-400 w-[21.875rem] h-[3rem] rounded-[1.5rem] hover:bg-gray-200 ${className}`}
      >
        {children || '+ Add New Item'}
      </button>
    )
  }
  if (buttonKind === 'cancel') {
    return (
      <button
        type="button"
        className={`flex justify-around items-center text-xs
 font-bold text-gray-400  w-[5.6rem] h-[3rem] rounded-[1.5rem] hover:bg-gray-200 ${className}`}
      >
        {children || 'cancel'}
      </button>
    )
  }
  if (buttonKind === 'discard') {
    return (
      <button
        type="button"
        className={`flex justify-around items-center text-xs
 font-bold text-gray-400 w-[5.6rem] h-[3rem] rounded-[1.5rem] hover:bg-gray-200 ${className}`}
      >
        {children || 'Discard'}
      </button>
    )
  }
  if (buttonKind === 'saveChanges') {
    return (
      <button
        type="submit"
        className={`flex justify-around items-center text-xs
 font-bold text-white bg-purple w-[8.6rem] h-[3rem] rounded-[1.5rem] hover:bg-purple-light ${className}`}
      >
        {children || 'Save Changes'}
      </button>
    )
  }
  if (buttonKind === 'saveSend') {
    return (
      <button
        type="submit"
        className={`flex justify-around items-center text-xs
 font-bold text-white bg-purple w-[8.18rem] h-[3rem] rounded-[1.5rem] hover:bg-purple-light ${className}`}
      >
        {children || 'Save & Send'}
      </button>
    )
  }
}

export default Button
