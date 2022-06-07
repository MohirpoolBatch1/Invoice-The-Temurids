/* eslint-disable no-console */
import React from 'react'
import EmptyEmail from '../../assets/illustration-empty.svg'
import Button from '../../components/Button/Button.jsx'

function Homepage() {
  // eslint-disable-next-line no-unused-vars
  function ok() {
    console.log('first')
  }
  return (
    <div className="w-full h-full bg-white">
      <div className="header  flex justify-between mx-48  h-16 mt-12 items-center ">
        <div className="nav_left flex flex-col  ">
          <h1 className="text-gray-600 font-bold  ">Invoices</h1>
          <p className="text-body-1 text-gray-300 font-normal">No invoices</p>
        </div>
        <div className="flex align-center ">
          <select
            defaultValue={'Filter by status'}
            className="border-none focus:outline-none   text-body-1 text-gray-600  pr-4 cursor-pointer mr-10 font-bold   "
          >
            <option value="Filter by status">Filter by status</option>
          </select>
          {/* <button type="button" className="bg-purple rounded-full  p-3 w-36 ">
            <div className="flex items-center  ">
              <div className=" flex items-center justify-center  w-8 h-8 rounded-full mr-4 bg-white   ">
                <span className="text-purple font-bold text-base mt-1  ">
                  +
                </span>
              </div>
              <span className="text-body-1 text-white ">New Invoice</span>
            </div>
          </button> */}
          <Button buttonKind="newInvoice" onClick={ok} />
        </div>
      </div>

      {/* main part */}
      {/* if there is no invoice */}
      <div className="m-auto w-72  my-10 flex flex-col items-center  ">
        <img src={EmptyEmail} alt="" />
        <h2 className="text-gray-600 font-bold mt-6">There is nothing here</h2>
        <p className="text-body-1 text-gray-300 text-center mt-4 w-42 ">
          Create an invoice by clicking the
          <br />
          <span className="font-bold"> New Invoice</span> button and get started
        </p>
      </div>
    </div>
  )
}

export default Homepage
