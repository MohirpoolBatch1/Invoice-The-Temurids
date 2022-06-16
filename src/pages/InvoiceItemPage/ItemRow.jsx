import React from 'react'

export default function ItemRow({items}) {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <strong className="flex text-xs my-3">{items[0].name}</strong>
        </div>
        <div className="flex justify-between w-1/2">
          <span className="text-gray-400 my-3 ml-6">{items[0].quantity}</span>
          <span className="capitalize text-gray-400 my-3">
            <span className="mr-1">£</span>
            {items[0].price}.00
          </span>
          <span className="font-bold my-3">
            <span className="mr-1">£</span>
            {items[0].total}.00
          </span>
        </div>
      </div>
      {items[1] && (
        <div className="flex justify-between">
          <strong className="flex text-xs my-3">{items[1].name}</strong>

          <div className="flex justify-between w-1/2">
            <span className="text-gray-400 my-3 ml-6">{items[1].quantity}</span>

            <span className="capitalize text-gray-400 my-3">
              <span className="mr-1">£</span>
              {items[1].price}.00
            </span>
            <span className="font-bold my-3">
              <span className="mr-1">£</span>
              {items[1].total}.00
            </span>
          </div>
        </div>
      )}
    </>
  )
}
