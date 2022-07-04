import React, {useState} from 'react'
import DeleteIcon from '../../assets/icon-delete.svg'

function FormItemsRow({id, itemName, qty, price, total}) {
  const [changeItemName, setChangeItemName] = useState(itemName)
  const [changeQty, setChangeQty] = useState(qty)
  const [changePrice, setChangePrice] = useState(price)
  function changeName(e) {
    if (e.target.name === itemName) {
      setChangeItemName(e.target.value)
    }
    if (e.target.name == qty) {
      setChangeQty(e.target.value)
    }
    if (e.target.name == price) {
      setChangePrice(e.target.value)
    }
  }
  return (
    <div id={id} className="flex mt-4 space-between ml-4">
      <input
        placeholder="Item name"
        name={itemName}
        value={changeItemName}
        onChange={changeName}
        type="text"
        className="max-w-52 rounded mt-[0.625rem] p-4 border border-gray-200 outline-0 focus:outline-1 outline-gray-400 text-xs box-border text-gray-600 font-bold"
      />
      <input
        placeholder="Qty."
        name={qty}
        value={changeQty}
        onChange={changeName}
        type="number"
        className="max-w-[46px] ml-4 rounded mt-[0.625rem] p-4 border border-gray-200 outline-0 focus:outline-1 outline-gray-400 text-xs box-border text-gray-600 font-bold"
      />
      <input
        placeholder="Price"
        name={price}
        value={changePrice}
        onChange={changeName}
        type="number"
        className="max-w-24 ml-4 rounded mt-[0.625rem] p-4 border border-gray-200 outline-0 focus:outline-1 outline-gray-400 text-xs box-border text-gray-600 font-bold"
      />
      <div
        className={
          'font-spartan w-14 ml-4 mt-7 text-xs text-gray-300 font-bold'
        }
      >
        {total}
      </div>
      <button className="h-4 ml-9 mt-7">
        <img src={DeleteIcon} alt="logo" />
      </button>
    </div>
  )
}
export default FormItemsRow
