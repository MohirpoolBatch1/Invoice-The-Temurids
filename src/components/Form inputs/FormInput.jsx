import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

/* --- Form Elementini o'rab turgan divga props orqali className berish imkoniyati mavjud --- */

const FormInput = ({
  labelText,
  inputType,
  className,
  name,
  id,
  errorValidation,
  reff,
}) => {
  const [startDate, setStartDate] = useState(new Date())
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState('')

  const blurHandle = e => {
    if (!inputValue && inputType !== 'date') setError("can't be empty")
    else setError('')
  }
  return (
    <label
      htmlFor={id}
      className={`font-spartan  ${className} text-xs flex flex-col text-gray-400  dark:text-gray-200 font-medium`}
    >
      <div
        className={`${
          error ? 'text-red' : 'text-gray-400'
        } flex justify-between `}
      >
        <span>{labelText}</span>
        <p className="text-body-1 text-red">
          {!error && !inputValue && inputType !== 'date'
            ? errorValidation
            : error}
        </p>
      </div>

      {inputType !== 'date' ? (
        <input
          ref={reff}
          onBlur={blurHandle}
          onChange={e => setInputValue(e.target.value)}
          id={id}
          name={name}
          type={inputType}
          className="rounded  mt-[0.625rem] p-3 border border-gray-200 outline-0 focus:outline-1 outline-gray-400 text-gray-600 dark:bg-gray-800 dark:border-gray-500 dark:text-white text-xs box-border    font-bold"
        />
      ) : (
        <DatePicker
          className={`mt-[0.625rem] p-3 border ${className} colors border-gray-700 outline-0 focus:outline-1 outline-gray-400 dark:bg-gray-800 dark:border-gray-500 text-xs box-border text-gray-600 dark:text-white  font-bold`}
          selected={startDate}
          // onSelect={13}
          onChange={date => setStartDate(date)}
          onBlur={blurHandle}
        />
      )}
    </label>
  )
}
export default FormInput
