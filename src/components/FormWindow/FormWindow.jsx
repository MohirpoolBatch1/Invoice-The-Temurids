import React from 'react'
import FormInput from '../Form inputs/FormInput.jsx'
import FormDropdown from '../Form inputs/FormDropdown.jsx'
import DeleteIcon from '../../assets/icon-delete.svg'

const FormWindow = () => (
  <div className="absolute z-20 bg-white w-[45rem] rounded-r-3xl pr-14 pt-14 pl-40 pb-8 h-full overflow-y-scroll scroll-smooth scroll-mr-8 scroll-pr-3.5">
    <h1 className="font-bold">New Invoice</h1>
    <p className="body-1 text-purple font-bold mt-12">Bill From</p>
    <FormInput
      labelText={'Street Address'}
      className={'mt-6'}
      inputType={'text'}
    />
    <div className="flex mt-6 w-full flex-wrap justify-between">
      <FormInput
        className={'w-[9.5rem]'}
        labelText={'City'}
        inputType={'text'}
      />
      <FormInput
        className={'w-[9.5rem]'}
        labelText={'Post Code'}
        inputType={'text'}
      />
      <FormInput
        className={'w-[9.5rem]'}
        labelText={'Country'}
        inputType={'text'}
      />
    </div>
    <p className="body-1 text-purple font-bold mt-12">Bill To</p>
    <FormInput
      className={'mt-6'}
      labelText={`Client's name`}
      inputType={'text'}
    />
    <FormInput
      className={'mt-6'}
      labelText={`Client's email`}
      inputType={'email'}
    />
    <FormInput
      className={'mt-6'}
      labelText={'Street Address'}
      inputType={'text'}
    />
    <div className="flex mt-6 w-full flex-wrap justify-between">
      <FormInput
        className={'w-[9.5rem]'}
        labelText={'City'}
        inputType={'text'}
      />
      <FormInput
        className={'w-[9.5rem]'}
        labelText={'Post Code'}
        inputType={'text'}
      />
      <FormInput
        className={'w-[9.5rem]'}
        labelText={'Country'}
        inputType={'text'}
      />
    </div>
    <div className="flex mt-6 w-full flex-wrap justify-between">
      <FormInput
        className={'w-60 pr-4'}
        labelText={'Invoice Date'}
        inputType={'date'}
      />
      <FormDropdown
        className={'w-60 pl-4'}
        labelText={'Payment Terms'}
        inputType={'text'}
      />
    </div>
    <FormInput
      className={'mt-6'}
      labelText={'Project Description'}
      inputType={'email'}
    />
    <h4 className="body-2 mt-8 text-[#777F98] text-[18px] font-bold">
      Item List
    </h4>
    <div className="flex content-between mt-4">
      <p className={'font-spartan text-xs w-52 text-gray-400 font-medium'}>
        Item Name
      </p>
      <p className={'font-spartan text-xs w-12 ml-4 text-gray-400 font-medium'}>
        Qty.
      </p>
      <p className={'font-spartan text-xs w-24 ml-4 text-gray-400 font-medium'}>
        Price
      </p>
      <p className={'font-spartan text-xs w-14 ml-4 text-gray-400 font-medium'}>
        Total
      </p>
    </div>
    <div className="flex mt-4">
      <input
        type="text"
        className="w-52 mt-[0.625rem] p-4 border border-gray-200 outline-0 focus:outline-1 outline-gray-400 text-xs box-border text-gray-600 font-bold"
      />
      <input
        type="text"
        className="w-12 ml-4 mt-[0.625rem] p-4 border border-gray-200 outline-0 focus:outline-1 outline-gray-400 text-xs box-border text-gray-600 font-bold"
      />
      <input
        type="text"
        className="w-24 ml-4 mt-[0.625rem] p-4 border border-gray-200 outline-0 focus:outline-1 outline-gray-400 text-xs box-border text-gray-600 font-bold"
      />
      <p className={'font-spartan w-14 ml-4 mt-6 text-gray-300 font-bold'}>
        0.00
      </p>
      <button className="h-4 mt-6">
        <img src={DeleteIcon} alt="logo" />
      </button>
    </div>
  </div>
)
export default FormWindow
