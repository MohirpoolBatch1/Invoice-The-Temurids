import React from 'react'
import {Link, useParams} from 'react-router-dom'
import arrowLeft from '../../assets/icon-arrow-left.svg'
import datas from '../../data.json'
import Button from '../../components/Button/Button.jsx'

function InvoiceItemPage() {
  const {invoiceId} = useParams()
  const choiceInvoices = datas.find(d => d.id === invoiceId)
  const {
    id,
    createdAt,
    paymentDue,
    description,
    clientName,
    clientEmail,
    status,
    senderAddress,
    clientAddress,
    items,
    total,
  } = choiceInvoices

  const createdAtUpp = convertData =>
    `Due ${new Intl.DateTimeFormat('en-UK', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(new Date(convertData))}`

  return (
    <div className="w-full h-full overflow-x-hidden	">
      <div className="ml-[15rem] mr-[17rem] mt-9">
        <Link to="/">
          <button className="flex flex-row items-center justify-between">
            <img className="mr-5" src={arrowLeft} alt="left" />
            <span className="mb-1 font-bold hover:text-gray-400">Go back</span>
          </button>
        </Link>
        <div className="w-full h-[88px] flex items-center justify-between bg-white text-body-1 rounded-[8px] mt-3">
          <div className="flex items-center text-xs">
            <span className="ml-8 text-gray-300 mb-1 font-medium">Status</span>
            <span
              className="flex flex-col justify-center h-[40px] ml-5 rounded-[6px] font-bold text-[#FF8F00] bg-[#FFF9F0] p-5  
    "
            >
              <span className=" relative">
                <span
                  className="absolute w-2 h-2 top-[3px] bg-[#FF8F00]
    rounded-full"
                ></span>
                <span className="capitalize ml-3 font-bold">{status}</span>
              </span>
            </span>
          </div>
          <div className="flex justify-around">
            <Button buttonKind={'editLight'} className="mr-2" />
            <Button buttonKind={'delete'} className="mr-2" />
            <Button buttonKind={'markAsPaid'} className="mr-6" />
          </div>
        </div>
        <div className="w-full flex flex-col justify-between bg-white text-body-1 rounded-[8px] mt-3 p-10">
          <div className="flex w-full justify-between">
            <div className="flex flex-col">
              <b className="text-base">
                <span className="text-gray-400">#</span>
                {id}
              </b>
              <p className="text-gray-400 py-2">{description}</p>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-400 p-[2px]">
                {senderAddress.street}
              </span>
              <span className="text-gray-400 p-[2px]">
                {senderAddress.city}
              </span>
              <span className="text-gray-400 p-[2px]">
                {senderAddress.postCode}
              </span>
              <span className="text-gray-400 p-[2px]">
                {senderAddress.country}
              </span>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="py-1">
                <span className="capitalize text-gray-400 p-[2px]">
                  invoice date
                </span>
                <br />
                <b className="text-base">{createdAtUpp(createdAt)}</b>
              </span>
              <span className="py-3">
                <span className="capitalize text-gray-400 p-[2px]">
                  payment due
                </span>
                <br />
                <b className="text-base">{createdAtUpp(paymentDue)}</b>
              </span>
            </div>
            <div className="flex flex-col pb-2">
              <span className="capitalize text-gray-400 p-[2px]">bill to</span>
              <b className="text-base">{clientName}</b>
              <span className="text-gray-400 p-[2px]">
                {clientAddress.street}
              </span>
              <span className="text-gray-400 p-[2px]">
                {clientAddress.city}
              </span>
              <span className="text-gray-400 p-[2px]">
                {clientAddress.postCode}
              </span>
              <span className="text-gray-400 p-[2px]">
                {clientAddress.country}
              </span>
            </div>
            <div className="flex flex-col mr-20">
              <span className="capitalize text-gray-400 p-[2px]">sent to</span>
              <b className="text-base">{clientEmail}</b>
            </div>
          </div>
          <div className="flex justify-between bg-[#F9FAFE] rounded-t-lg mx-3 mt-3 p-6">
            <div className="flex flex-col w-2/5">
              <span className="capitalize text-gray-400 my-3 ">item name</span>
              {items.map(item => (
                <b className="text-xs my-3">{item.name}</b>
              ))}
            </div>
            <div className="flex justify-evenly w-3/5">
              <div className="flex flex-col items-center w-1/2">
                <span className="uppercase text-gray-400 my-3">qity</span>
                {items.map(item => (
                  <span className="text-gray-400 my-3">{item.quantity}</span>
                ))}
              </div>
              <div className="flex flex-col items-center w-1/2">
                <span className="capitalize text-gray-400 my-3">price</span>
                {items.map(item => (
                  <span className="capitalize text-gray-400 my-3">
                    {item.price}.00
                  </span>
                ))}
              </div>
              <div className="flex flex-col items-center">
                <span className="capitalize text-gray-400 my-3">total</span>
                {items.map(item => (
                  <span className="font-bold my-3">{item.total}.00</span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-between bg-[#373B53] rounded-b-lg mx-3 mb-3 p-6 text-white">
            <span className="font-medium text-xs">Amount Due</span>
            <span className="font-bold text-[1.5rem]">£{total}.00</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvoiceItemPage
