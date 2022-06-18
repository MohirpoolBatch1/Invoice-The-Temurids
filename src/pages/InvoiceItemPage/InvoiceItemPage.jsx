import React from 'react'
import {Link, useParams} from 'react-router-dom'
import arrowLeft from '../../assets/icon-arrow-left.svg'
import datas from '../../data.json'
import Button from '../../components/Button/Button.jsx'
import {formatDate} from '../../utils/index'
import {constantColors} from '../../components/InvoiceItem/constantColors'
import ItemRow from './ItemRow.jsx'

function InvoiceItemPage() {
  const {invoiceId} = useParams()
  const choiceInvoices = datas.find(d => d.id === invoiceId)
  const choiceColorStatus = choiceInvoices.status
  const [bgColor, textColor] = constantColors[choiceColorStatus]
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

  return (
    <div className="w-full h-full overflow-x-hidden">
      <div className="ml-[15rem] mr-[17rem] mt-9">
        <Link to="/">
          <button className="flex flex-row items-center justify-between">
            <img className="mr-5" src={arrowLeft} alt="left" />
            <span className="mb-1 font-bold hover:text-gray-400">Go back</span>
          </button>
        </Link>
        <div className="w-full h-[5.5] flex items-center justify-between bg-white text-body-1 rounded-[8px] py-3 mt-3">
          <div className="flex items-center text-xs">
            <span className="ml-8 text-gray-300 mb-1 font-medium">Status</span>
            <span
              className={`flex flex-col justify-center ml-5 rounded-[6px] font-bold bg-[${bgColor}] text-[${textColor}] py-3 px-5  
    `}
            >
              <span className=" relative">
                <span
                  className={`absolute w-2 h-2 top-[3px] bg-[${textColor}]
    rounded-full`}
                ></span>
                <span className={`capitalize ml-3 font-bold`}>{status}</span>
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
              <h3>
                <span className="text-gray-400">#</span>
                {id}
              </h3>
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
                <b className="text-base">{formatDate(createdAt)}</b>
              </span>
              <span className="py-3">
                <span className="capitalize text-gray-400 p-[2px]">
                  payment due
                </span>
                <br />
                <b className="text-base">{formatDate(paymentDue)}</b>
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
          <div className="flex flex-col justify-between bg-[#F9FAFE] rounded-t-lg mt-3 p-6">
            <div className="flex justify-between">
              <span className="capitalize text-gray-400 my-3">item name</span>
              <div className="flex justify-between w-1/2">
                <span className="uppercase text-gray-400 my-3 ml-3">qity</span>
                <span className="capitalize text-gray-400 my-3 mr-[0.6rem]">
                  price
                </span>
                <span className="capitalize text-gray-400 my-3">total</span>
              </div>
            </div>
            <ItemRow itemData={items} />
          </div>
        </div>
        <div className="flex justify-between bg-[#373B53] rounded-b-lg mx-3 mb-3 p-6 text-white">
          <span className="font-medium text-xs">Amount Due</span>
          <span className="font-bold text-[1.5rem]">
            <span className="mr-1">£</span>
            {total}.00
          </span>
        </div>
      </div>
    </div>
  )
}

export default InvoiceItemPage