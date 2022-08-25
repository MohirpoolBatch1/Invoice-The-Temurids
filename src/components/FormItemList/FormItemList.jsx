import React, {useState} from 'react'
import DeleteIcon from '../../assets/icon-delete.svg'

function FormItemsRow({id, itemName, qty, price, total}) {
  const [formValue, setFormValue] = useState({
    [itemName]: itemName,
    [qty]: qty,
    [price]: price,
  })

  function handleChange(event) {
    const {name, value} = event.target
    setFormValue(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
<<<<<<< HEAD
    <div id={id} className="flex mt-4 space-between">
=======
    <div id={id} className="flex mt-4 space-between items-center ">
>>>>>>> abcd3a1 (fix(IT-36)-changes-added)
      <input
        placeholder="Item name"
        name={itemName}
        value={formValue[itemName]}
        onChange={handleChange}
        type="text"
        className="max-w-52 rounded  p-4 border border-gray-200 outline-0 focus:outline-1 outline-gray-400 text-xs box-border text-gray-600 font-bold dark:text-white dark:bg-gray-800 dark:border-gray-500 dark:outline-none "
      />
      <input
        placeholder="Qty."
        name={qty}
        value={formValue[qty]}
        onChange={handleChange}
        type="number"
        className="max-w-[46px] ml-4 rounded  p-4 border border-gray-200 outline-0 focus:outline-1 outline-gray-400 text-xs box-border text-gray-600 font-bold dark:text-white dark:bg-gray-800 dark:border-gray-500 dark:outline-none "
      />
      <input
        placeholder="Price"
        name={price}
        value={formValue[price]}
        onChange={handleChange}
        type="number"
        className="max-w-24 ml-4 rounded p-4 border border-gray-200 outline-0 focus:outline-1 outline-gray-400 text-xs box-border text-gray-600 font-bold dark:text-white dark:bg-gray-800 dark:border-gray-500 dark:outline-none "
      />
      <div
        className={
          'font-spartan w-14 ml-4  text-body-2 text-gray-300 font-bold dark:text-white'
        }
      >
        {total}
      </div>
      <button>
<<<<<<< HEAD
        <img src={DeleteIcon} alt="logo" />
=======
        <img className="h-4 w-16 " src={DeleteIcon} alt="logo" />
>>>>>>> abcd3a1 (fix(IT-36)-changes-added)
      </button>
    </div>
  )
}
export default FormItemsRow
