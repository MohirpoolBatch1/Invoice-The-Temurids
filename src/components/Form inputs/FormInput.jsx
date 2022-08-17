import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

/* --- Form Elementini o'rab turgan divga props orqali className berish imkoniyati mavjud --- */

const FormInput = ({labelText, inputType, className, name, id}) => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <label
      htmlFor={id}
      className={`font-spartan  ${className} text-xs flex flex-col text-gray-400  dark:text-gray-200 font-medium`}
    >
      {labelText}
      {inputType !== 'date' ? (
        <input
          id={id}
          name={name}
          type={inputType}
          className="rounded  mt-[0.625rem] p-3 border border-gray-200 outline-0 focus:outline-1 outline-gray-400 text-gray-600 dark:bg-gray-800 dark:border-gray-500 dark:text-white text-xs box-border    font-bold"
        />
      ) : (
        <DatePicker
          className={`mt-[0.625rem] p-3 border ${className} border-gray-200 outline-0 focus:outline-1 outline-gray-400 dark:bg-gray-800 dark:border-gray-500 text-xs box-border text-gray-600 dark:text-white  font-bold`}
          selected={startDate}
          onSelect={13}
          onChange={date => setStartDate(date)}
        />
      )}
    </label>
  )
}
export default FormInput
