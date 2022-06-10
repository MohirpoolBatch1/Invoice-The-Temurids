import React from 'react'

/* --- Form Elementini o'rab turgan divga props orqali className berish imkoniyati mavjud --- */
const FormInput = ({labelText, inputType, className}) => (
  <div className={`font-spartan flex flex-col ${className}`}>
    <label className="text-xs flex flex-col text-gray-400 font-medium">
      {labelText}
      <input
        type={inputType}
        className="mt-[0.625rem] p-3 border border-gray-200 outline-0 focus:outline-1 outline-gray-400 text-xs box-border text-gray-600 font-bold"
      />
    </label>
  </div>
)

export default FormInput
