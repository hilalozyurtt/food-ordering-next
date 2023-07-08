import React from 'react'

const Input = (props) => {

  const { type, placeholder, errorMessage, ...inputProps} = props

  return (
    <div className="w-full">
      <label className="relative block cursor-text w-full">
        <input type={type} className={`h-14 w-full border  outline-none 
        px-4 peer pt-2 ${errorMessage ? "border-red-500" : "border-primary"}`} required {...inputProps}/>
        <span className="absolute top-0 left-0 px-4 text-sm flex h-full peer-focus:h-7
         peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs items-center transition-all ">
         {placeholder}</span>
      </label>
    </div>
  )
}

export default Input