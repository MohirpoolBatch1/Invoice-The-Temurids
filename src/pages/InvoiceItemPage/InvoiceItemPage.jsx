import React, {useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import arrowLeft from '../../assets/icon-arrow-left.svg'
import Button from '../../components/Button/Button.jsx'
import {formatDate} from '../../utils/index'
import {useInvoiceItemDetailsQuery} from '../../services/invoiceApi'
import {constantColors} from '../../components/InvoiceItem/constantColors'
import ItemRow from './ItemRow.jsx'
import FormWindow from '../../components/FormWindow/FormWindow.jsx'

function InvoiceItemPage() {
  const [openWindow, setOpenWindow] = useState(false)
  const {invoiceId} = useParams()
  const {
    data = {},
    isLoading,
    isSuccess,
  } = useInvoiceItemDetailsQuery(invoiceId)
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
  } = data
  const activeColorArr = []
  if (status === 'paid') {
    activeColorArr.push(...constantColors.paid)
  }
  if (status === 'pending') {
    activeColorArr.push(...constantColors.pending)
  }
  if (status === 'draft') {
    activeColorArr.push(...constantColors.draft)
  }

  const [bgColor, textColor, dotColor] = activeColorArr
  return (
    <div className="w-full h-full overflow-x-hidden">
      {openWindow && (
        <>
          <FormWindow
            setOpenWindow={setOpenWindow}
            kindModal={'edit'}
            id={id}
            itemData={items}
          />
        </>
      )}
      {isLoading && <div>Loading</div>}
      {isSuccess && (
        <div className="ml-[15rem] mr-[17rem] my-9">
          <Link to="/">
            <button className="flex flex-row items-center justify-between">
              <img className="mr-5" src={arrowLeft} alt="left" />
              <span className="mb-1 font-bold hover:text-gray-400 dark:text-white dark:hover:text-gray-300">
                Go back
              </span>
            </button>
          </Link>
          <div className="w-full h-[5.5] flex items-center justify-between bg-white dark:bg-gray-800 text-body-1 rounded-[8px] py-3 mt-3">
            <div className="flex items-center text-xs">
              <span className="ml-8 text-gray-300 dark:text-gray-200 mb-1 font-medium">
                Status
              </span>
              <span
<<<<<<< HEAD
                className={`flex flex-col justify-center ml-5 rounded-[6px] font-bold ${bgColor} ${textColor} py-3 px-5 `}
=======
                className={`flex flex-col justify-center ml-5 rounded-[6px] font-bold ${bgColor} dark:bg-gray-500 ${textColor} py-3 px-5 `}
>>>>>>> abcd3a1 (fix(IT-36)-changes-added)
              >
                <span className=" relative">
                  <span
                    className={`absolute w-2 h-2 top-[3px] ${dotColor} rounded-full`}
                  ></span>
                  <span className="capitalize ml-3 font-bold">{status}</span>
                </span>
              </span>
            </div>
            <div className="flex justify-around">
              <Button
                buttonKind={'editLight'}
                onClick={() => setOpenWindow(true)}
<<<<<<< HEAD
<<<<<<< HEAD
                className="mr-2"
=======
                className="mr-2 dark:bg-gray-500 dark:text-gray-200"
>>>>>>> abcd3a1 (fix(IT-36)-changes-added)
=======
                className="mr-2 dark:bg-gray-500  dark:hover:bg-white text-gray-400"
>>>>>>> b45383c (feat(IT-36)-forminput-validation-added)
              />
              <Button buttonKind={'delete'} className="mr-2" />
              <Button buttonKind={'markAsPaid'} className="mr-6" />
            </div>
          </div>
          <div className="w-full flex flex-col justify-between bg-white dark:bg-gray-800 text-body-1 rounded-[8px] mt-3 p-10">
            <div className="flex w-full justify-between">
              <div className="flex flex-col">
                <h3 className="dark:text-white">
                  <span className="text-gray-400">#</span>
                  {id}
                </h3>
                <p className="text-gray-400 dark:text-gray-200 py-2">
                  {description}
                </p>
              </div>
              <div className="flex flex-col text-body-2 text-gray-400 dark:text-gray-200">
                <span className=" p-[2px]">{senderAddress.street}</span>
                <span className=" p-[2px]">{senderAddress.city}</span>
                <span className=" p-[2px]">{senderAddress.postCode}</span>
                <span className=" p-[2px]">{senderAddress.country}</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="py-1">
                  <span className="capitalize text-body-1 text-gray-400 dark:text-gray-200 p-[2px]">
                    invoice date
                  </span>
                  <br />
                  <b className="text-base dark:text-white">
                    {formatDate(createdAt)}
                  </b>
                </span>
                <span className="py-3">
                  <span className="capitalize text-body-1 text-gray-400 dark:text-gray-200 p-[2px]">
                    payment due
                  </span>
                  <br />
                  <b className="text-base dark:text-white">
                    {formatDate(paymentDue)}
                  </b>
                </span>
              </div>
              <div className="flex flex-col pb-2 text-gray-400 text-xs dark:text-gray-200">
                <span className="capitalize  p-[2px]">bill to</span>
                <b className="text-base text-gray-600  dark:text-white">
                  {clientName}
                </b>
                <span className=" p-[2px]">{clientAddress.street}</span>
                <span className=" p-[2px]">{clientAddress.city}</span>
                <span className=" p-[2px]">{clientAddress.postCode}</span>
                <span className=" p-[2px]">{clientAddress.country}</span>
              </div>
              <div className="flex flex-col mr-20">
                <span className="capitalize text-body-1 text-gray-400 dark:text-gray-200 p-[2px]">
                  sent to
                </span>
                <b className="text-base dark:text-white">{clientEmail}</b>
              </div>
            </div>
            <div className="flex flex-col justify-between bg-[#F9FAFE] dark:bg-gray-500 rounded-t-lg mt-3 p-6">
              <div className="flex justify-between font-thin  ">
                <span className="capitalize text-body-2  text-gray-400 dark:text-gray-200 my-3">
                  item name
                </span>
                <div className="flex justify-between w-1/2 text-body-2  text-gray-400 dark:text-gray-200">
                  <span className="uppercase  my-3 ml-3 ">qity</span>
                  <span className="capitalize  my-3 mr-[0.6rem]">price</span>
                  <span className="capitalize  my-3">total</span>
                </div>
              </div>
              <ItemRow itemData={items} />
            </div>
            <div className="flex justify-between bg-[#373B53] dark:bg-gray-600 rounded-b-lg mb-1 p-6 text-white">
              <span className="font-medium text-xs">Amount Due</span>
              <span className="font-bold text-[1.5rem]">
                <span className="mr-1">£</span>
                {total}.00
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default InvoiceItemPage
