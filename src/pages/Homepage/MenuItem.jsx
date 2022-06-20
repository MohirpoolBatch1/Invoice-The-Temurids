import React, {useState} from 'react'
import {Menu} from '@headlessui/react'

function MenuItem({status, datas, setInvoiceStatus, setData}) {
  const [check, setCheck] = useState(false)

  const handleChange = e => {
    setCheck(!check)
    const filteredDatas = datas.filter(item => item.status === e.target.name)
    setData(filteredDatas)
    setInvoiceStatus(e.target.value)
  }

  return (
    <Menu.Item>
      <label
        htmlFor={status}
        className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm cursor-pointer"
      >
        <input
          onChange={handleChange}
          name={status}
          type="checkbox"
          className="mr-2 cursor-pointer "
          id={status}
          checked={check}
        />
        {status}
      </label>
    </Menu.Item>
  )
}

export default MenuItem
