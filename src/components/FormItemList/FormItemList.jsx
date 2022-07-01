import React from 'react'
import DeleteIcon from '../../assets/icon-delete.svg'

const FormItemsRow = () => (
  <div className="flex mt-4 space-between ml-4">
    <input
      placeholder="Item name"
      type="text"
      className="max-w-52 rounded mt-[0.625rem] p-4 border border-gray-200 outline-0 focus:outline-1 outline-gray-400 text-xs box-border text-gray-600 font-bold"
    />
    <input
      placeholder="Qty."
      type="number"
      className="max-w-[46px] ml-4 rounded mt-[0.625rem] p-4 border border-gray-200 outline-0 focus:outline-1 outline-gray-400 text-xs box-border text-gray-600 font-bold"
    />
    <input
      placeholder="Price"
      type="number"
      className="max-w-24 ml-4 rounded mt-[0.625rem] p-4 border border-gray-200 outline-0 focus:outline-1 outline-gray-400 text-xs box-border text-gray-600 font-bold"
    />
    <div
      className={'font-spartan w-14 ml-4 mt-7 text-xs text-gray-300 font-bold'}
    >
      00.00
    </div>
    <button className="h-4 ml-9 mt-7">
      <img src={DeleteIcon} alt="logo" />
    </button>
  </div>
)
export default FormItemsRow
