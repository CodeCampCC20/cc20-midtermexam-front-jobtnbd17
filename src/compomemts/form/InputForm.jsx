import React from 'react'

function InputForm({
  error,
  hdlChaneg,
  value,
  placeholder,
  type="text",
  id,
}) {
  return (
      <div>
            <input className={`w-full px-4 py-2 rounded-lg  bg-gray-100  ${error ? "outline-1 outline-red-500" : "outline-0"}`} 
            id={id}
            onChange={hdlChaneg}
            type={type}
            value={value}
            placeholder={placeholder}
            />
            <p className="text-xs text-red-600">{error}</p>
            </div>
  )
}

export default InputForm