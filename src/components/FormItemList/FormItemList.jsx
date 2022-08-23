import React, {useState, useEffect} from 'react'
import DeleteIcon from '../../assets/icon-delete.svg'

function FormItemsRow({id, name, qty, price, setItemsRow}) {
  const [formValue, setFormValue] = useState({
    name,
    qty: 1,
    price: 256,
    id,
    total: 256,
  })

  function handleChange(event) {
    setFormValue(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
    setFormValue(prevState => ({
      ...prevState,
      total: prevState.qty * prevState.price,
    }))
  }

  useEffect(() => {
    setItemsRow(prev => {
      const copy = [...prev]
      copy[id - 1] = formValue
      return copy
    })
  }, [formValue])
  return (
    <div id={id} className="flex mt-4 space-between">
      <input
        placeholder="Item name"
        name={name}
        value={formValue[name]}
        onChange={handleChange}
        type="text"
        className="max-w-52 rounded mt-[0.625rem] p-4 border border-gray-200 outline-0 focus:outline-1 outline-gray-400 text-xs box-border text-gray-600 font-bold"
      />
      <input
        placeholder="Qty."
        name={qty}
        value={formValue[qty]}
        onChange={handleChange}
        type="number"
        className="max-w-[46px] ml-4 rounded mt-[0.625rem] p-4 border border-gray-200 outline-0 focus:outline-1 outline-gray-400 text-xs box-border text-gray-600 font-bold"
      />
      <input
        placeholder="Price"
        name={price}
        value={formValue[price]}
        onChange={handleChange}
        type="number"
        className="max-w-24 ml-4 rounded mt-[0.625rem] p-4 border border-gray-200 outline-0 focus:outline-1 outline-gray-400 text-xs box-border text-gray-600 font-bold"
      />
      <div
        className={
          'font-spartan w-14 ml-4 mt-7 text-xs text-gray-300 font-bold'
        }
      >
        {formValue.total}
      </div>
      <button
        onClick={() =>
          setItemsRow(item => item.filter(items => items.id !== id))
        }
      >
        <img src={DeleteIcon} alt="logo" />
      </button>
    </div>
  )
}
export default FormItemsRow
